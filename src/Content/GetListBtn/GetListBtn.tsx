import Axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../App";
import { GET_USERLIST, SHOW_ALERT, SHOW_LOADER } from "../../store/const";
import { RootState } from "../../store/initialState";
import { getUserlist } from "../../utils/getUserList";

export function GetListBtn() {
  const token = useSelector<RootState, string>((state) => state.token);

  function handleClick() {
    store.dispatch({ type: SHOW_LOADER, isShowLoader: true });
    console.log(token);
    Axios.get("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
      headers: { Authorization: `Token ${token}` },
    })
      .then((resp) => {
        console.log(resp.data);
        console.log(getUserlist(resp.data));
        store.dispatch({
          type: GET_USERLIST,
          usersList: getUserlist(resp.data).sort((a, b) =>
            a.id > b.id ? 1 : -1
          ),
        });
        store.dispatch({ type: SHOW_LOADER, isShowLoader: false });
      })
      .catch((er) => {
        console.log(er);
        store.dispatch({ type: SHOW_ALERT, isShowAlert: true });
        store.dispatch({ type: SHOW_LOADER, isShowLoader: false });
      });
  }

  return (
    <button
      type="button"
      className="btn btn-primary mb-3"
      onClick={() => handleClick()}
    >
      get list
    </button>
  );
}
