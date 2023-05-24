import React, { Fragment } from "react";
import "./App.css";

//components

import Table from "./components/Table";
import LinkContainer from "./components/LinkContainer";

function App() {
  return (
    <Fragment>
      <div className="container">
        <LinkContainer />
        <Table />
      </div>
    </Fragment>
  );
}

export default App;