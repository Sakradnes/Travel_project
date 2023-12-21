export type Location = {
  id: number;
  name: string;
  coordinateLatitude: number;
  coordinateLongitude: number;
};

export type State = {
  locations: Location[];
  isLocation: number;
  error: undefined | string;
};
