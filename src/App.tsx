import React from "react";
import { createStore } from "redux";
import "./App.css";
import { Provider } from "react-redux";
import { rootReducer } from "./store/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Container } from "./shared/Container";

export const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
