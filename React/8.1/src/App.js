import logo from './logo.svg';
import './App.css';
import Boxes from './JSX-Boxes/box1/Boxes';
import Boxes2 from './JSX-Boxes/box2/Boxes2';
import Boxes3 from './JSX-Boxes/box3/Boxes3';
import Boxes4 from './JSX-Boxes/box4/Boxes4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Boxes>
        <Boxes2>
          <Boxes3>
            <Boxes4></Boxes4>
            <Boxes4></Boxes4>
          </Boxes3>
        </Boxes2>

      </Boxes>
     
      
      </header>
    </div>
  );
}

export default App;
