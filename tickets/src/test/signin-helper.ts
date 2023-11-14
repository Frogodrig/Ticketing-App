import { sign } from "jsonwebtoken";
import mongoose from "mongoose";

export const signin = () => {
  // Build a JWT payload. { id, email }
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: "test@test.com",
  };

  // Create the JWT!
  const token = sign(payload, process.env.JWT_key!);

  // Build session object. { jwt: MY_JWT }
  const session = { jwt: token };

  // Turn that session into JSON
  const sessionJSON = JSON.stringify(session);

  // Take JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString("base64");

  // Return a string thats the cookie with the encoded data
  return [`session=${base64}`];
};
