// import type { Login, Rega, User } from './type/authTypes';

// export const registrationFetch = async (obj: Rega): Promise<User> => {
//   const res = await fetch('/api/auth/registration', {
//     method: 'POST',
//     headers: { 'Content-Type': 'Application/json' },
//     body: JSON.stringify(obj),
//   });
//   if (!res.ok) {
//     const { message } = await res.json();
//     throw message;
//   }
//   const data = await res.json();
//   return data;
// };

// export const loginFetch = async (obj: Login): Promise<User> => {
//   const res = await fetch('/api/auth/registration', {
//     method: 'POST',
//     headers: { 'Content-Type': 'Application/json' },
//     body: JSON.stringify(obj),
//   });
//   if (!res.ok) {
//     const { message } = await res.json();
//     throw message;
//   }
//   const data = await res.json();
//   return data;
// };
