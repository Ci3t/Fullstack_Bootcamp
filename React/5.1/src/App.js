import logo from './logo.svg';
import './App.css';
import button from './jsx/button.js';
import Button from './jsx/button.js';
const style2= {
  fontWeight:'bold'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
      <Button css ={style2} title="Important"></Button>
      <Button title="Not Important"></Button>
     
      </header>
    </div>
  );
}

export default App;
