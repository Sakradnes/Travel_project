export type Event = {
  id: number;
  name: string;
  date: string;
  img: string;
  description: string;
  locationId: number;
};
export type Change = Omit<Event, 'locationId'>;

export type State = {
  events: Event[];
  error: string | undefined;
};
