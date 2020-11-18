import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT, OPEN_LOGIN_FORM } from "../../store/const";
import { RootState } from "../../store/initialState";

interface ILoginBtn {
  name: "LogIn" | "LogOut";
}

export function LoginBtn({ name }: ILoginBtn) {
  const dispatch = useDispatch();

  const isLoginFormOpen = useSelector<RootState, boolean>(
    (state) => state.isLoginFormOpen
  );

  let handleClick: () => void;

  if (name === "LogIn") {
    handleClick = () => {
      dispatch({ type: OPEN_LOGIN_FORM, isLoginFormOpen: !isLoginFormOpen });
    };
  } else {
    handleClick = () => {
      dispatch({ type: LOG_OUT, token: "" });
    };
  }

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => handleClick()}
    >
      {name}
    </button>
  );
}
