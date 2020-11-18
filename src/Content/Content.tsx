import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/initialState";
import { sortByName } from "../utils/sortByName";
import "./content.css";
import { GetListBtn } from "./GetListBtn";

export interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

export function Content() {
  const usersList = useSelector<RootState, IUser[] | undefined>(
    (state) => state.usersList
  );

  const [list, setList] = useState(usersList);

  useEffect(() => {
    setList(usersList);
  }, [usersList]);

  const [value, setValue] = useState("");

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    ev.preventDefault();
    setValue(ev.target.value);
    setList(sortByName(usersList, ev.target.value));
  }

  return (
    <div className="card p-3">
      <div className="card-body">
        <GetListBtn />

        <h2 className="card-title mb-3">List of users</h2>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              find user
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={handleChange}
            value={value}
          />
        </div>

        <ul className="list-group">
          {list?.length === undefined ? (
            <li className="list-group-item">The list is empty. Load data</li>
          ) : (
            list?.map((item: IUser) => (
              <li
                className="list-group-item list-group-item__user"
                key={item.id}
              >
                <span className="item__id">id: {item.id}</span>
                <span className="item__username">
                  Username: {item.username}
                </span>
                <span className="item__first_name">
                  First name: {item.first_name}
                </span>
                <span className="item__last_name">
                  Last name: {item.last_name}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
