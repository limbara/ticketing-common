import { EnumSubject } from './enum-subject';

export interface BaseEvent {
  subject: EnumSubject;
  data: any;
}

export interface TicketCreatedEvent extends BaseEvent {
  subject: EnumSubject.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}

export interface TicketUpdatedEvent extends BaseEvent {
  subject: EnumSubject.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
