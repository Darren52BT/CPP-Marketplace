import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

function NavBar() {
    return(
        <Navbar expand="lg" className="navbar-custom">
        <Container>
            <Nav.Link href="#"><img className="hamburger-column" src="src\photos\Hamburger_icon.png" alt="hamburger" /></Nav.Link>
            <Navbar.Brand href="#home" className="fs-4">CPP MARKETPLACE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ms-auto">
                <Nav.Link href="#home"><img id="noti" src="src\photos\bell.png" alt="notification" className="img-fluid" /></Nav.Link>
                <Nav.Link href="#"><img id="pfp" src="src\photos\user.png" alt="pfp" className="img-fluid" /></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;