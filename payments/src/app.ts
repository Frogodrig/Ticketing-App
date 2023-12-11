import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@ticketingdotcom/common";

const app = express();
app.set("trust proxy", true); //Telling express that we're using a proxy
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
