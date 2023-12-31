import React, {useState} from 'react'
import "../login.css"
import {auth, app} from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState ("");
 const navigate = useNavigate("");

 const Login=(e)=>{
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate("/")
// console.log(userCredential);   
  })
  .catch((error) => {
    console.log(error);
  });
 }

  return (
    <div className="container-signin">
      <section className='wrapper'>
        <div className='heading'>
          <h1 style={{color:"black"}} className='text text-large'><strong>Sign In</strong></h1>
          <p style={{color:"black"}} className='text text-normal'>New User?<span><a href="/register" className='text text-links'> Create an account</a></span></p>
        </div>
        <form onSubmit={Login}>
          <div className='input-control'>
            <input type='email' placeholder='enter your email address' value={email} onChange={(e)=>setEmail(e.target.value)} className='input-field'>
            </input>
            </div>
            <div className='input-control'>
              <input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='input-field'>               
              </input>
            </div>
            <button type='submit' name='Submit' className='input-submit' value="Sign-In">Sign In</button>
        </form>
      </section>
    </div>
  )
}

export default Login