import { Rating } from '../routes/type';
import type { IdPhotoAlbum, Login, PhotoAlbum, Rega, User } from './type/authTypes';

export const registrationFetch = async (obj: Rega): Promise<User> => {
  const res = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const loginFetch = async (obj: Login): Promise<User> => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data.user;
};

export const logOut = async (): Promise<undefined> => {
  const res = await fetch('/api/auth/logout');
  const data = await res.json();
  if (res.ok) {
    return data;
  }
};

export async function userCheck(): Promise<undefined> {
  const res = await fetch('/api/auth/check');
  const data = await res.json();
  if (res.ok) {
    return data.user;
  }
}

export const addFetchPhoto = async (obj: FormData): Promise<PhotoAlbum[]> => {
  const res = await fetch(`/api/profile`, {
    method: 'POST',
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const deleteFetchPhoto = async (photoId: number): Promise<IdPhotoAlbum> => {
  const res = await fetch(`/api/profile/${photoId}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const editUserFetch = async (obj: FormData): Promise<User> => {
  const res = await fetch(`/api/profile/edit`, {
    method: 'PUT',
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const setRatingFetch = async (routeId: number, rating: number): Promise<Rating> => {
  const res = await fetch(`/api/routes`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ routeId, rating }),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};
