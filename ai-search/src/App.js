import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import NeuralSearch from "./NeuralSearch";
import LearnReact from "./LearnReact";

const App = () => {
  return (
    <div>
      <h1>AI Search</h1>
      <SearchParams />
      <br></br>
      <NeuralSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
