import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@ticketingdotcom/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
