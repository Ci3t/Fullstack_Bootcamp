import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { auth } from "./../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [user, setUser] = useState(null);
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  // const handleSignUp =async(e)=>{

  // }
  async function login() {
    setLoginError(null);
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (e) {
      setLoginError(e);
    }
  }
  async function logout() {
    await signOut(auth);
  }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      {user && (
        <div>
          logged in as : {user.email}
          <button onClick={logout}>LogOut</button>
        </div>
      )}
      {!user && (
        <>
          <div>
            <h3>Login</h3>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
            {/* <input type="text" value={userName} placeholder={'username'} onChange={(e)=>{setUserName(e.target.value)}} /> */}
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
            <button onClick={login}>Log In</button>
            {loginError?.message}
          </div>

          <div className="w-100 text-center mt-2">
            already have an account? Log In
          </div>
        </>
      )}
    </div>
  );
}

export default SignIn;
