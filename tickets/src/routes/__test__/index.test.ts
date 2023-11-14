import request from "supertest";
import { app } from "../../app";
import { signin } from "../../test/signin-helper";

const createTicket = (title: string, price: number) => {
  return request(app).post("/api/tickets").set("Cookie", signin()).send({
    title: title,
    price: price,
  });
};

it("Can fetch a list of tickets", async () => {
  await createTicket("CWC IND vs PAK", 2000);
  await createTicket("CWC ENG vs NZ", 1500);
  await createTicket("CWC NED vs BAN", 1000);

  const response = await request(app).get("/api/tickets").send().expect(200);

  expect(response.body.length).toEqual(3);
});
