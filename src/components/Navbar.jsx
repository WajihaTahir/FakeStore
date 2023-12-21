import React from "react";
import "../App.css";
import "../styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Fake Store
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/allproducts">All Products</CustomLink>
        <CustomLink to="/favorite">
          <FontAwesomeIcon icon={faHeart} />
        </CustomLink>
        <CustomLink to="/cart">Cart</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="register">Register</CustomLink>
      </ul>
    </nav>
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

// function Navbar() {
//   return (
//     <nav className="nav">
//       <a href="/" className="site-title">
//         Fake Store
//       </a>
//       <ul>
//         <li>
//             <li>
//                 <a href="/home">Home</a>
//             </li>
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/allproducts">All Products</a>
//           </li>
//           <li>
//             <a href="/men">Men's</a>
//           </li>
//           <li>
//             <a href="/women">Women's</a>
//           </li>
//           <li>
//             <a href="/electronics">Electronics</a>
//           </li>
//           <li>
//             <a href="/cart">Cart</a>
//           </li>
//           <li>
//             <a href="/login">Login |</a>
//             <a href="/Register"> Register</a>
//             </li>
//             </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
