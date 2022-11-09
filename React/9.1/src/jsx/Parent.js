
import React, { useState } from 'react'
import Child from './Child';




function Parent(props) {
    const colors = ["blue","red","yellow"];

const [colorBtn,setColorBtn]= useState('Red')

const itr = ()=>{
    return colors.map(color=>{
        return <Child style={color} state={setColorBtn} />
    })
}
// const buttonHandle = (state,color)=>{
//     state(prevColor=>{
//        return prevColor = color
//      })
// } 
    return (
        <div>
           {itr()}
           <div>Color is : {colorBtn}</div>
        </div>
    )

}

export default Parent