import logo from './logo.svg';
import './App.css';
import Input from './jsx/Input';
import Button from './jsx/Button';
import { useEffect, useState } from 'react';
import List from './jsx/List';



function App() {
const [inputItem,setInputItem] = useState('')
const [listItem,setListItem] = useState(getLocalStorage())
const [checkItem,setCheckItem] = useState([])
const [isChecked,setIsChecked] = useState(false)


  const item = (input)=>{

    if(!inputItem){
      console.log('Enter Item');
    }

    const itemListed = {
      id: Math.floor(Math.random()*1000),
      value:inputItem,
      isCompleted:false
    }
    
    setListItem(oldList=> [...oldList,itemListed])
    setInputItem("")
    console.log(listItem);
  }
  const deleteItem =(id)=>{
    const deleteFromList = listItem.filter(item=> item.id !== id);
    console.log(id);
    setListItem(deleteFromList)
  }
  const check =(id)=>{

   
      let done = [...listItem].map(item=>{
        if(item.id ===id){
          item.isCompleted = !item.isCompleted
        }
  
          return item
        
      })
      setListItem(done)
    // if(isCompleted){
    //   return (
        
    //     )
    //   }else{
        
    //     <span>&#10005;</span>
    // }
  }
function getLocalStorage (){
    let list = localStorage.getItem("listItem")
    if(list){
      return (list = JSON.parse(localStorage.getItem("listItem")))
    }else{
      return []
    }
  }
  
  useEffect(()=>{
  
    localStorage.setItem('listItem',JSON.stringify(listItem))
  },[listItem])
  return (
    <div className="App">
     <h1>TODO's</h1>
     <h3>with Local Storage CRUD</h3>
     <Input setInputItem={setInputItem} inputItem={inputItem} />
     <Button  item={item} name="Add"/>
     <List check={check} deleteItem={deleteItem} setListItem={setListItem} listItem={listItem}/>
    </div>
  );
}

export default App;
