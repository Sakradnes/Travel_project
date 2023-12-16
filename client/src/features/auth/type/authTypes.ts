export type PhotoAlbums = {
  id: number;
  userId: number;
  name: string;
  img: string;
};
export type User = {
  id?: number;
  name?: string;
  email?: string;
  isAdmin?: boolean;
  avatar?: string;
  PhotoAlbums?: PhotoAlbums[];
};

export type State = {
  user: undefined | User;
  error: undefined | string;
};

export type Rega = {
  name: string;
  email: string;
  password: string;
  cpassword: string;
};

export type Login = {
  email: string;
  password: string;
};
