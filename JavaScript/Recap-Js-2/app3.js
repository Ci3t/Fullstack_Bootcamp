const obj= { 
    firstname :'bob',
    lastname: 'ccc',
    food:'tuna',

}

obj2 = 
console.log(obj2);

arr =[]

for(let item of obj ){
    
    let {firstname,food}=item

   arr.push(firstname)

}


import React from 'react'

function app3({name,food,lastname}) {
  return (
    <div>{name} {} {food}</div>
  )
}

export default app3