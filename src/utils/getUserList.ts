import { IUser } from "../Content";

export function getUserlist(originalArr: Array<any>) {
  let userlist: IUser[] = [];

  for (let obj of originalArr) {
    const myObj: IUser = {
      id: 0,
      username: "",
      first_name: "",
      last_name: "",
    };

    for (const key in obj) {
      switch (key) {
        case "id":
          myObj.id = obj[key];
          break;
        case "username":
          myObj.username = obj[key];
          break;
        case "first_name":
          myObj.first_name = obj[key];
          break;
        case "last_name":
          myObj.last_name = obj[key];
          break;
        default:
          console.log("no entries");
          break;
      }
    }
    userlist.push(myObj);
  }
  return userlist;
}
