export type State = {
  routes: Route[];
  loading: boolean | undefined;
  error: string | undefined;
};

export type Way = {
  id: number;
  routeId: number;
  path: string;
  name: string;
  description: string;
  coordinateLatitude: number;
  coordinateLongitude: number;
};

export type Route = {
  id: number;
  name: string;
  description: string;
  img: string;
  locationId: number;
  optionId: number;
  userId: number;
  Ways: Way[];
};
