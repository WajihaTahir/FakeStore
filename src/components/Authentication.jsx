import React, {useEffect, useState} from "react";
import {auth, app} from "../firebase"
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Authentication = () => {
const [authenticateduser, setAuthenticateduser] = useState ("");
useEffect(()=>{
    const listenAuth= onAuthStateChanged(auth, (user)=>{
        if(user){
            setAuthenticateduser(user)
        } else {
            setAuthenticateduser(null)

        }
    }
    )
    return() => {
        listenAuth();
    }

    
},[])
const userSignOut = () => {
    signOut(auth).then(()=>{
        console.log("user signed out");
    }).catch(error => console.log("error"))
}

return(
    <>
    {authenticateduser === null ?
    <>
    <CustomLink to="/login">Login</CustomLink>
    <CustomLink to="/register">Sign Up</CustomLink>
    </>:
     <>
     <CustomLink to="/" onClick={userSignOut}>Sign Out</CustomLink>
     </>
    }
    </>
);
}


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to); //allows to take the relevant path
    const isActive = useMatch({ path: resolvedPath.pathname, end: true }); //we want to pass our path and we are saying that entire url must match.
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

export default Authentication;