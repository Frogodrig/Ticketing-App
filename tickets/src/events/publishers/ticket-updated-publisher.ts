import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@ticketingdotcom/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
