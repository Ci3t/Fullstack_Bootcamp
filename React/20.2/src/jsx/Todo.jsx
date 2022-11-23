import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { items : [
            { id:"1", name: "CSS", completed: true },
            {id:"2", name: "JavaScript", completed: true },
            { id:"3",name: "Learn React", completed: false },
            { id:"4",name: "Learn mongoDB", completed: false },
            {id:"5", name: "Learn Node JS", completed: false },
            ]}
    }
        check=(todo)=>{
           this.setState({
            items: this.state.items.map((item)=>{ return item.id === todo.id ? {...item,completed: !item.completed} : item
            })
           })
        }
        
        render() {
        // console.log(check());
    //   console.log(this.state.items);
    return (
      <div>
        <h1>Todo App:</h1>
        <div >
           {this.state.items.map(item => {
            return(
                <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>
                <p style={{textDecoration: item.completed? 'line-through': null}}  key={item.id}>{item.name}</p>
                <p  onClick={()=>{
                    this.check(item)
                }} >{item.completed ? <>&#x2713;</> : "X"}</p>
                </div>
                
            )
           })}
        </div>
      </div>
    )
  }
}
