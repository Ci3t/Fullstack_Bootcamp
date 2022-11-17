import logo from "./logo.svg";
import "./App.css";
import { api } from "./api";
import UserInput from "./jsx/Create/UserInput";
import { useEffect, useState } from "react";
import axios from "axios";
import ViewData from "./jsx/Read/ViewData";

function App() {
  const [mockData, setMockData] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [inputItem2, setInputItem2] = useState("");
  const [inputItem3, setInputItem3] = useState("");

  useEffect(() => {
    const response = api("https://63738f8d0bb6b698b60f9519.mockapi.io/user")
      .then((res) => {
        setMockData(res);
      })
      .catch((err) => console.log(err));
  },[]);

  const mockDataDelete = (id) => {
    const deleteRes = axios.delete(
      `https://63738f8d0bb6b698b60f9519.mockapi.io/user/${id}`,
    );
    setMockData(
      mockData.filter((user) => {
        return id !== user.id;
      }),
    );
  };
  const mockDataEdit =(id)=>{
    const response =  axios.put(`https://63738f8d0bb6b698b60f9519.mockapi.io/user/${id}`, {
      
      name: inputItem3,
     
    })
    .then((res) => {
      setMockData(prevData=>{
        console.log(prevData);
        return prevData.map(d=>res.data.id===d.id?res.data:d)
        // return [...prevData,res.data]
        
      })
      // return res
    });
    setInputItem3("");
    // setMockData(mockData.filter(user=>{
    //   return id !== user.id
    // }))


  }

  const mockDataCreateUser = () => {
    if (!inputItem) {
      console.log("Enter Item");
    }
    const addRes = axios
      .post(`https://63738f8d0bb6b698b60f9519.mockapi.io/user`, {
        name: inputItem,
        avatar: inputItem2,
      })
      .then((res) => {
        setMockData([...mockData, res.data]);
      });

    setInputItem("");
  };

  return (
    <div className="App">
      <UserInput
        mockDataCreateUser={mockDataCreateUser}
        setInputItem={setInputItem}
        setInputItem2={setInputItem2}
        inputItem={inputItem}
        mockData={mockData}
      ></UserInput>
      {mockData.map((data) => {
        return (
          <ViewData
            deleteData={mockDataDelete}
            key={data.id}
            data={data}
            inputItem3={inputItem3}
            setInputItem3={setInputItem3}
            mockDataEdit={mockDataEdit}
          />
        );
      })}
    </div>
  );
}

export default App;
