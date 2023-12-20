export type State = {
  routes: Route[];
  loading: boolean | undefined;
  error: string | null;
};

export type Route = {
  id: number;
  name: string;
  description: string;
  img: string;
};
