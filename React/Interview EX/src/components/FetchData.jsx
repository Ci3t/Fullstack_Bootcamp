import React from 'react'
import axios from 'axios';
import data from "./assets/data.json";
import { useContext } from 'react';
import { createContext } from 'react';
import ListItem from './ListItem/ListItem';



const Data1 = createContext([])
function FetchData() {
   <Data1>
    <ListItem value={data}></ListItem>
   </Data1>
    
}

export default FetchData