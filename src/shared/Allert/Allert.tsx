import React from "react";
import { useDispatch } from "react-redux";
import { HIDE_ALERT } from "../../store/const";
import "./allert.css";

export function Allert() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch({ type: HIDE_ALERT, isShowAlert: false });
  }

  return (
    <div className="card alert">
      <div className="card-body">
        <h5 className="card-title">:-(</h5>
        <p className="card-text">
          Something went wrong. Please try again later.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClick()}
        >
          Close
        </button>
      </div>
    </div>
  );
}
