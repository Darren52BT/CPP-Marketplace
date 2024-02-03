import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar expand="xl" className="navbar-custom background">
        <Container fluid>
          <Nav.Link href="#" onClick={handleShow}>
            <img
              className="hamburger-column"
              src="src\photos\Hamburger_icon.png"
              alt="hamburger"
            />
          </Nav.Link>
          <Navbar.Brand href="/" className="fs-4">
            CPP MARKETPLACE
          </Navbar.Brand>
          <div className="ms-auto">
            <Link to={"/login"}>
              <img
                id="pfp"
                src="src\photos\user.png"
                alt="pfp"
                className="img-fluid"
              />
            </Link>
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link
            to={""}
            className="d-block text-black fw-medium fs-4 mb-2 text-decoration-none"
          >
            Search
          </Link>
          <Link
            to={""}
            className="d-block text-black fw-medium fs-4 mb-2 text-decoration-none"
          >
            Browse
          </Link>
          <Link
            to={""}
            className="d-block text-black fw-medium fs-4 mb-2 text-decoration-none"
          >
            Bookmarks
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavBar;
