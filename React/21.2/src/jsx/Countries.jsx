import axios from "axios";
import React, { Component } from "react";

export default class Countries extends Component {
  state = {
    countries: [],
    input: ''
    
  };

  async componentDidMount() {
    const res = await axios.get("https://restcountries.com/v2/all");

    this.setState({ 
        countries: res.data ,
        filterList:this.state.countries
    });
  }

  render() {
      return (
          <>
          {console.log(this.state.filterList)}
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
        );
  }
}
