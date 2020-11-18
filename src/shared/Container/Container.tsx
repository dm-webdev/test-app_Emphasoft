import React from "react";
import { useSelector } from "react-redux";
import { Content } from "../../Content";
import { Header } from "../../Header";
import { RootState } from "../../store/initialState";
import { Allert } from "../Allert";
import { LoaderIndicator } from "../LoaderIndicator";

export function Container() {
  const isShowLoader = useSelector<RootState, boolean>(
    (state) => state.isShowLoader
  );

  const isShowAlert = useSelector<RootState, boolean>(
    (state) => state.isShowAlert
  );

  const token = useSelector<RootState, string>((state) => state.token);

  return (
    <div className="app">
      <Header />

      {token.length > 3 ? <Content /> : null}

      {isShowLoader && <LoaderIndicator />}

      {isShowAlert && <Allert />}
    </div>
  );
}
