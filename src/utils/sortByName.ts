import { IUser } from "../Content/Content";

export function sortByName(
  arr: IUser[] | undefined,
  value: string | undefined
) {
  return arr?.filter((item) => item.username.includes(`${value}`));
}
