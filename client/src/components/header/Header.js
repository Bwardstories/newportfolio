import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/icons/favicon.png";
import { useHistory } from "react-router-dom";
import { useProvideContact } from "../../hooks";

const Header = () => {
  // brings in global state
  const { state, showContact } = useProvideContact();
  //  useHistory hook to for navigating different pages
  let history = useHistory();
  const handleClick = () => {
    history.push("/resume");
    window.scrollTo(0, 0);
  };

  return (
    //  used bootstrap for Header and Links
    <Navbar variant="dark" expand="lg" className="headerNavbar">
      <Navbar.Brand href="/portfolio/#intro" className="logoLink">
        <img src={logo} alt="" className="logoIcon" />
        <span className="logoName"> BRIAN WARD</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="headerLinks ml-auto">
          <Nav className="">
            {state.contactFormVisible ? (
              ""
            ) : (
              <button onClick={showContact}>Contact Me</button>
            )}
            <Nav.Link href="/portfolio/#aboutMe">About Me</Nav.Link>
            <Nav.Link href="/portfolio/#projectSection">Projects</Nav.Link>
            <button onClick={handleClick}>Resume</button>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
