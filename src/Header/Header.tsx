import React from "react";
import "./header.css";
import { LoginBtn } from "./LoginBtn";
import { LoginForm } from "./LoginForm";
import logo from "../logo.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store/initialState";

export function Header() {
  const isLoginFormOpen = useSelector<RootState, boolean>(
    (state) => state.isLoginFormOpen
  );

  const token = useSelector<RootState, string>((state) => state.token);

  const userName = useSelector<RootState, string>((state) => state.username);

  return (
    <header className="app-header">
      <img src={logo} className="app-header__logo" alt="logo of app" />

      <p>
        {token.length < 3 ? "Welcome! Please login." : `Hello, ${userName}!`}
      </p>

      {isLoginFormOpen && (
        <div className="app-header__wrap">
          <LoginForm />
        </div>
      )}

      {!isLoginFormOpen && (
        <LoginBtn name={token.length < 3 ? "LogIn" : "LogOut"} />
      )}
    </header>
  );
}
