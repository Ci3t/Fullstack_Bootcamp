import React,{ useState} from 'react'
import Name from './Name';
import Card from './Card';
function Data({name}) {
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
        let dataName  =[]
        const dataReturnName= () =>{
        
           data.map(name1=>{
                 
                dataName.push(name1.name)
            })
        }
  

        const born90 = [];
        data.map((e) => {
            if (parseInt(e.birthday.split("-")[2]) < 1990) {
             
                born90.push(e)
            }
        });
        console.log(born90);
        
        // const born = () =>{
       
        //     let filter = 
            
        //     return filter;
        // };
        // console.log(born());

    
  return (
    <div className='container'>
        <div>
            {data.map(e=>{
                const {name} = e
                return(

                    <Name firstName={name}/>
                    
                )
            })}

        </div>
        <div>
           {  born90.map((info)=>{
            const {birthday,favoriteFoods,name}= info
           
            
            return(
                <div>
                    <Card name2={name}  birth={birthday} food ={favoriteFoods.meats}  food2 ={favoriteFoods.fish}/>
                 
                </div>
            )

            
           })}
        </div>
       
    </div>
  )
}

export default Data