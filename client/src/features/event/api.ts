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
  const { message } = await res.json();
  throw message;
};
export const changeFetchevent = async (obj: FormData): Promise<Event> => {
  const res = await fetch('/api/events', {
    method: 'put',
    body: obj,
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  const { message } = await res.json();
  throw message;
};

export const deleteFetchEvent = async (id: Event['id']): Promise<Event['id']> => {
  const res = await fetch('/api/events', {
    method: 'delete',
    body: JSON.stringify({ id }),
    headers: { 'Content-Type': 'Application/json' },
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  const { message } = await res.json();
  throw message;
};
