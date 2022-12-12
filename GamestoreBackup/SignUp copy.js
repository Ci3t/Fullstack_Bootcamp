import React,{useEffect, useRef,useState} from 'react'
import {Form,Button,Card} from 'react-bootstrap'
import {auth} from './../firebase'
import {createUserWithEmailAndPassword , onAuthStateChanged, signOut} from 'firebase/auth'


function SignUp() {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState('')
    const [regError, setRegError] = useState(null)

    const emailRef= useRef()
    const passwordRef= useRef()
    const passwordConfirmRef= useRef()


  

    // const handleSignUp =async(e)=>{
   
    // }
     async function signup() {
            setRegError(null)
            try{
    
               await createUserWithEmailAndPassword(auth,email,password)
            }catch (e){
                setRegError(e)
            }
        }
     async function logout() {
         
        await signOut(auth)
        }

    const handleSubmit =async (e)=>{
        e.preventDefault()

       
     
    }

    useEffect(()=>{
        onAuthStateChanged(auth , user=>{
            setUser(user)
        })
       },[])
        
  return (
    <div>

    {user && (
        <div>
          logged in as :  {user.email}
          <button onClick={logout}>LogOut</button>
        </div>
    )}
    {!user &&  (
        <>
      <div>
        <h3>Register</h3>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        {/* <input type="text" value={userName} placeholder={'username'} onChange={(e)=>{setUserName(e.target.value)}} /> */}
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button onClick={signup}>Sign up</button>
        {regError?.message}
       
      </div>
         
   <div className='w-100 text-center mt-2'>
    already have an account? Log In
   </div>
        </>
    )}
 
</div>
  )
}

export default SignUp