import axios from "axios";
import React, { Component } from "react";


export default class Countries extends Component {
  controller = new AbortController();
  state = {
    countries: [],
    input: '',
    toggle: false,
    // loaded:true,
    
  };
  // source = axios.CancelToken.source();
componentDidMount() {
  //   this.setState({ 
  //     loaded:true,
  // });
  this.fetchData()
 


  }

  componentWillUnmount(){
    
    this.controller.abort();
    console.log('ABORTED');
    

    // if (source) {
    //   source.cancel("Landing Component got unmounted");
    // }
  

  }

  
toggleComp=()=>{
      
    this.setState({
  toggle: !this.state.toggle,
  // loaded:!this.state.loaded,

});
}

fetchData = async ()=>{
  try{

   setTimeout(async () => {
    
    const res = await axios.get("https://restcountries.com/v2/all",{
      controller: this.controller.signal
    });
    if(!this.state.toggle){
      this.controller.abort('ABORT MISSION')
    }else{

      this.setState({ 
        countries: res.data ,
        toggle: !this.state.toggle
      });
    }
    
   }, 3000);
    
  }catch(e){
    // console.log('ABORTED');
   this.controller.abort()
  }

}

  render() {
  
      return (
          <>
          <button onClick={this.toggleComp}>toggle</button><br/><br/>
        {/* {console.log(this.state.toggle)} */}
        {this.state.toggle && 
        <>
        <label>Search:</label>
    <input
          type="text"
          placeholder='Search'
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
          
          />
            
          <button
            type="button"
            >Search</button>

          
<div className="country-list">
          {this.state.countries.filter(count=>count.name.toLowerCase().includes(this.state.input)).map((country)=>(
          <ul>
            {/* {console.log(country.name)} */}
            <li>{country.name}</li>
          </ul>
         ))}
         </div>
         </>
         }
          
        </>
        );
  }
}
