import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from "./SearchParams";
import NeuralSearch from "./NeuralSearch";
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
  // const [theme, setTheme] = useState("darkblue");
  const theme = useState("darkblue");
  return (
    // ThemeContext is a React component that wraps our entire application
    // `<ThemeContext.Provider value={theme}>` is basically the same like everything inside of this, 
    // So in our case, our entire application is now wrapped in a provider. So now everything inside of this can access this context.
    // So now anything inside of like everything down to details and carousel and error boundary, all those components can say, 
    // "Hey, whay's my theme at the monent?". That's the theme available everywhere.
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>AI Search</h1>
            </Link>
          </header>

          <Switch>
            <Route path="/details/:id">
              {/* 
              Passing these theme properties from component to component to component.
              This is called prop drilling, we have to prop pass it from parent to child.
              */}
              <Details theme={theme}/>
            </Route>
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
