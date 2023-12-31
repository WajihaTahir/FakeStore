import React, {useState} from 'react'
import "../login.css"
import {auth, app} from "../firebase"
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'






function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState ("");
  const navigate = useNavigate("");
 
  const Register=(e)=>{
   e.preventDefault();
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    navigate("/login")
//  console.log(userCredential);   
   })
   .catch((error) => {
     console.log(error);
   });
  }
 
   return (
     <div className="container-signin">
       <section className='wrapper'>
         <div className='heading'>
           <h1 style={{color:"black"}} className='text text-large'><strong>Register</strong></h1>
           <p style={{color:"black"}} className='text text-normal'>Already a user?<span><a href="/login" className='text text-links'> Login here</a></span></p>
         </div>
         <form onSubmit={Register}>
           <div className='input-control'>
             <input type='email' placeholder='enter your email address' value={email} onChange={(e)=>setEmail(e.target.value)} className='input-field'>
             </input>
             </div>
             <div className='input-control'>
               <input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='input-field'>               
               </input>
             </div>
             <button type='submit' name='Submit' className='input-submit' value="Sign-In">Submit</button>
         </form>
       </section>
     </div>
   )
 }

export default Register