export type State = {
  routes: Route[];
  loading: boolean | undefined;
  error: string | undefined;
  ratings: Rating[];
};

export type Rating = {
  id?: number;
  routeId: number;
  userId?: number;
  rating: number;
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
  Ratings: Rating[];
};
