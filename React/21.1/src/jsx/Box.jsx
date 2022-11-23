import React, { Component } from 'react'
import './box.css'

export default class Box extends Component {

    state={
        className: '',
    }

    componentDidMount(){
        this.setState({className: this.state.className ='box'})
    }
    render() {
    //   console.log(this.state.className)
    return (
        <>
      <div>
      <div style={{width:'150px'}} className={this.state.className}></div>

        <div className={this.state.className}></div>
        
      </div>
        <div style={{width:'100px'}} className={this.state.className}></div>
        
        
      
    </>
    )
  }
}
