export interface User {
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  phone: string;
  email: string;
}

export type TopPaymentMethod = 'card' | 'cash' | 'codi' | 'spei';

export interface Report {
  averageTicket: number;
  topTicket: number;
  topPaymentMethod: TopPaymentMethod;
  revenuePerHour: number[];
}

export type ResponseReport = Report & { previousDay: Report };