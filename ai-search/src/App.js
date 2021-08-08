import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NeuralSearch from "./NeuralSearch";
import ThemeContext from './ThemeContext';

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Image Search</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/">
              <NeuralSearch />
            </Route>        
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
