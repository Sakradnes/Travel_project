export type Location = {
  id: number;
  name: string;
};

export type State = {
  locations: Location[];
  isLocation: number;
  error: undefined | string;
};
