import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Data from './jsx/Data';
import Name from './jsx/Name';

function App() {


  
    const [state,setState]=useState()
    const data = [
        {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
        },
        },
        {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
        },
        },
        {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
        },
        },
        {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
        },
        },
        {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
        },
        },
        ];
        let nameArr = []
        const dataReturnName= () =>{
        
           let dataName =  data.map(name1=>{
            nameArr.push(name1.name)
            })
            return  dataName
        }
        // console.log(dataReturnName());

        const born = () =>{
       
      
            const born90 = [];
            data.forEach((e) => {
                if (parseInt(e.birthday.split("-")[2]) < 1990) {
                 
                  born90.push(e);
                }
            });
            return born90;
        };
        born()


  return (
    <div className="App">
      <header className="App-header">
     {/* console.log(data); */}
    <Data>
    
    </Data>
     
      </header>
    </div>
  );
}

export default App;
