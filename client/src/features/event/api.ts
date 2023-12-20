import type { Event } from './type/eventType';

export const initEventFetch = async (): Promise<Event[]> => {
  const data: Event[] = await (await fetch('/api/events')).json();
  return data;
};

export const addFetchEvent = async (obj: FormData): Promise<Event> => {
  const res = await fetch('/api/events', {
    method: 'post',
    body: obj,
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
};
