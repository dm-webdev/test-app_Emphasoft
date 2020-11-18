export type RootState = {
  isLoginFormOpen: boolean;
  token: string;
  username: string;
  isShowLoader: boolean;
  isShowAlert: boolean;
  usersList?: {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
  }[];
};

export const initialState: RootState = {
  isLoginFormOpen: false,
  token: "",
  username: "",
  isShowLoader: false,
  isShowAlert: false,
};
