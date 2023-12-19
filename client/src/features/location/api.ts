import type { Location } from './type/locationtype';

export const initLocationFetch = async (): Promise<Location[]> => {
  const data: Location[] = await (await fetch('/api/locations')).json();
  return data;
};
