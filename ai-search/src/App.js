import ReactDOM from 'react-dom';
import NeuralSearch from './NeuralSearch';


const App = () => {
  return (
    <div>
      <h1>AI Search</h1>
      <NeuralSearch />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
