import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@ticketingdotcom/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
