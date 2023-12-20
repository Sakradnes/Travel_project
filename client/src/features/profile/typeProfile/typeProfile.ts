import { PhotoAlbums } from '../../auth/type/authTypes';

export type State = {
  photoAlbums: PhotoAlbums[];
  error: undefined | string;
};
