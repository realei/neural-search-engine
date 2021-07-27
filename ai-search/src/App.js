import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from "./SearchParams";
import NeuralSearch from "./NeuralSearch";
import Details from './Details';

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>AI Search</h1>
          </Link>
        </header>

        <Switch>
          <Route path="/details/:id">
            <SearchParams />
          </Route>
          <Route path="/">
            <NeuralSearch />
          </Route>        
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
