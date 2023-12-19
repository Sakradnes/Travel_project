import { User } from "../../auth/type/authTypes";

export type State = {
    user:  User;
    error: undefined | string;
  };