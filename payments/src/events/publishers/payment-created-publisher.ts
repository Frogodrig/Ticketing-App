import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@ticketingdotcom/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
