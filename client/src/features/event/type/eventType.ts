export type Event = {
  id: number;
  name: string;
  date: string;
  img: string;
  discription: string;
  locationId: number;
};

export type State = {
  events: Event[];
  error: string | undefined;
};
