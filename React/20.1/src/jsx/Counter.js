
import './counter.css'
    

import React, { Component } from 'react'
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

 

   increment = ()=>{

    this.setState({counter: Math.min(this.state.counter + 1,10)});
  
    
   
}

 decrement = ()=>{
    // setCount((prevCount) => (Math.max(prevCount - 1,-10)));
    this.setState({counter: Math.max(this.state.counter - 1,-10)});
  
}
  render() {
    return (
      <div>
          <label >
  
          <button onClick={this.increment}>+</button>
          <div className={this.state.counter>0?'green': this.state.counter < 0?'red':''}>{this.state.counter}</div>
          <button onClick={this.decrement}>-</button>
          </label>
      </div>
    )
  }
}



export default Counter