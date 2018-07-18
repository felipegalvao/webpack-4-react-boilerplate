import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";

const Index = () => {
  return (
    <div>
      <p>Hello React!</p>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
