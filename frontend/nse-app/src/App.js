import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./Search";

const App = () => {
  return (
    <div>
      <h1>Neural Search</h1>
      <Search />
    </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
