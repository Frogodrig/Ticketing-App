import mongoose from "mongoose";
import request from "supertest";
import { OrderStatus } from "@ticketingdotcom/common";
import { app } from "../../app";
import { Order } from "../../models/Order";
import { signin } from "../../test/signin-helper";
import { stripe } from "../../stripe";

jest.mock("../../stripe");

it("returns a 404 when purchasing an order that does not exist", async () => {
  await request(app)
    .post("/api/payments")
    .set("Cookie", signin())
    .send({
      token: "asldkfj",
      orderId: new mongoose.Types.ObjectId().toHexString(),
    })
    .expect(404);
});

it("returns a 401 when purchasing an order that does not belong to the user", async () => {
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    userId: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    price: 20,
    status: OrderStatus.Created,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", signin())
    .send({
      token: "asldkfj",
      orderId: order.id,
    })
    .expect(401);
});

it("returns a 400 when purchasing a cancelled order", async () => {
  const userId = new mongoose.Types.ObjectId().toHexString();
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    userId,
    version: 0,
    price: 20,
    status: OrderStatus.Cancelled,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", signin(userId))
    .send({
      orderId: order.id,
      token: "asdlkfj",
    })
    .expect(400);
});

it("returns a 204 with valid inputs", async () => {
  const userId = new mongoose.Types.ObjectId().toHexString();
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    userId,
    version: 0,
    price: 20,
    status: OrderStatus.Created,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", signin(userId))
    .send({
      orderId: order.id,
      token: "tok_visa",
    })
    .expect(204);

  const chargeOptions = (stripe.paymentIntents.create as jest.Mock).mock
    .calls[0][0];
  expect(chargeOptions.amount).toEqual(20 * 100);
  expect(chargeOptions.currency).toEqual("inr");
});
