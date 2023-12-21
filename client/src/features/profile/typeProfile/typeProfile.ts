import type { PhotoAlbum } from '../../auth/type/authTypes';

export type State = {
  photoAlbums: PhotoAlbum[];
  error: undefined | string;
};
