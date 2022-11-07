import logo from './logo.svg';
import './App.css';
import Img from './jsx/Img';
import Para from './jsx/Para';
import Title from './jsx/Title';
import Card from './jsx/Card';
import Button from './jsx/Buttons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card>
        <Img/>
        <Title>Random Title</Title>
        <Para>Random Para</Para>
        <Button>Share</Button>
        <Button>Explore</Button>
      </Card>
   
     
      </header>
    </div>
  );
}

export default App;
