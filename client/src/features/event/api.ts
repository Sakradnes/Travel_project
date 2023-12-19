import type { Event } from './type/eventType';

export const initEventFetch = async (): Promise<Event[]> => {
  const data: Event[] = await (await fetch('/api/events')).json();
  return data;
};
