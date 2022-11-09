import React, { useRef, useState } from "react";
import "./images.css";

function Images() {
  // const [show,setShow]=useState(true)
  // const [sonic,setSonic]=useState(true)
  const showColored = useRef("");
  const showSonic = useRef("");

  return (
    <div className="container">
      <div>
        <img
          ref={showColored}
          onMouseLeave={() => {
            showColored.current.src = require("./images/nezuko-modified.jpg");
          }}
          onMouseOver={() => {
            showColored.current.src = require("./images/nezuko.jpg");
          }}
          width="500"
          height="730"
          src={require("./images/nezuko-modified.jpg")}
          alt="nezuko B&W"
        />
      </div>
      <div>
       
        <img
         ref={showSonic}
            onMouseLeave={() => {
                showSonic.current.src = require("./images/sonic-modified.jpg");
              }}
              onMouseOver={() => {
                showSonic.current.src = require("./images/sonic.jpg");
              }}
          width="500"
          height="730"
          src={require("./images/sonic-modified.jpg")}
          alt="nezuko B&W"
        />
      </div>
      {/* <div>
            <img onMouseOver={()=>{ setShow(prev=>!prev )}} className={show ?'nezuko-img':''} onMouseLeave={()=>{ setShow(prev=>!prev )}} width="500" height="730"  src={require('./images/nezuko.jpg') }alt="nezuko B&W"/>
        </div>
        <div >
            <img onMouseOver={()=>{ setSonic(prev=>!prev )}} className={sonic ?'sonic-img':''} onMouseLeave={()=>{ setSonic(prev=>!prev )}} width="500" height="730" src={require('./images/sonic.jpg') }alt="sonic B&W"></img>
        </div> */}
    </div>
  );
}

export default Images;
