import React, { Component } from 'react'

export default class Input extends Component {

    state={
        second: 0,
        minute:  0,
        hour: 0,
        input1:'',
        input2:'',
        input3:'',



    }
  render() {
    return (
      <div>

        <input value={this.state.input1} onChange={(e)=>{
            this.setState({input1:e.target.value})

        }} placeholder='hour' type="text"/>
        <p>Hour: {this.state.hour = ~~(this.state.input1 / 3600)}</p>
        <p>Min : {this.state.minute = ~~(this.state.input2 * 60) }</p>
        <p> Second : {this.state.second= ~~this.state.input3 - this.state.minute * 60}</p>
        <input value={this.state.input2} onChange={(e)=>{
            this.setState({input2:e.target.value})

        }} placeholder='Min' type="text"/>
       <input value={this.state.input3} onChange={(e)=>{
            this.setState({input3:e.target.value})

        }} placeholder='sec' type="text"/>
      </div>
    )
  }
}
