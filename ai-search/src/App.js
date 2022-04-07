import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NeuralSearch from "./NeuralSearch";
// import ThemeContext from './ThemeContext';
import TitlebarImageList from "./TitlebarImageList.js";

const App = () => {
  const theme = useState("darkblue");
  return (
    // <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Toorbee Image Search</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/">
              <NeuralSearch />
            </Route>
            <Route path="/data">
              <h1>DATA Page Is here for DEMO only!</h1>
            </Route>
            <Route path="/results">
              <TitlebarImageList />
            </Route>        
          </Switch>
        </Router>
      </div>
    // </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
