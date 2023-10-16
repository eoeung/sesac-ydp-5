import logo from './logo.svg';
import './App.css';
import Form from './components/react-hook-form/Form';
import Training from './components/react-hook-form/Training';

function App() {
  return (
    <div className="App">
      <Form />

      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>

      {/* [실습 1] react-hook-form 연습 */}
      <Training />
      
    </div>
  );
}

export default App;
