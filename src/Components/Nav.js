import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Login from "./user/Login";

const Nav = ({modalShow,setModalShow}) => {
  return (
    <>
    <nav className="navbar">
      <div className="container">
      <a className="navbar-brand text-white" href="#">
        <FaGraduationCap color="#BB2D3B" className="danger " size={50} />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp; THE FIRST IN LANGUAGE
      </a>

    <ul className="navbar__right">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#About">About</a>
          </li>
          <li className="nav-item">
            <a href="#formation">Formation</a>
          </li>
          <li className="nav-item">
            <a href="#Maps">Maps</a>
          </li>
          <li className="nav-item">
            <a href="#Contact">Contact</a>
          </li>
        
        </ul>

        <button type="button" className="btn btn-danger  "  onClick={() => setModalShow(true)}>
            Connexion
          </button>
      </div>
    

    </nav>
 
    <Login
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
    </>
  );
};

export default Nav;
