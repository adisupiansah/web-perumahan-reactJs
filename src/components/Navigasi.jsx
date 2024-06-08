import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";



const Navigasi = ({ handleDarkMode, darkMode }) => {
  // state untuk navbar jika di scroll menjadi bg-white
  const [navbarColor, setNavbarColor] = useState("");

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);


  return (
    <div className="component-navigasi">
      <Navbar expand="lg" className={`fixed-top ${navbarColor ? 'navbar-colored' : 'navbar-transparent'}`}>
      <Container>
        <Navbar.Brand href="/" className="nav-logo"><img src="/logo-web-perumahan.png" alt="..." className="nav-img-logo"/> Rumah-Group</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mx-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* terima props fungsi click */}
        <Button variant="" className="nav-button-mode" onClick={handleDarkMode}>{darkMode ? <FaSun/> : <FaMoon/>}</Button>
      </Container>
    </Navbar>
    </div>
  );
};

export default Navigasi;
