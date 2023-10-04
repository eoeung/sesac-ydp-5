import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import NumberClass from './NumberClass';
import NumberFunction from './NumberFunction';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <CounterFunction value="Plus 1" />
      <hr />

      <NumberClass />
      <hr />

      <NumberFunction />
      <hr />
    </div>
  );
}

export default App;
