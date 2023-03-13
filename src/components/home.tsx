import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <Navbar bg="body-tertiary" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">
          <img
            src="https://www.svgrepo.com/show/242329/colombia.svg"
            alt="Colombia"
            style={{ width: "80px", height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bolder fs-4">
              Colombia
            </Nav.Link>
            <Nav.Link as={Link} to="/departments" className="fw-bolder fs-4">
              Departments
            </Nav.Link>
            <Nav.Link as={Link} to="/cities" className="fw-bolder fs-4">
              Cities and Towns
            </Nav.Link>
            <Nav.Link as={Link} to="/tourists" className="fw-bolder fs-4">
              Tourists
            </Nav.Link>
            <Nav.Link as={Link} to="/presidents" className="fw-bolder fs-4">
              Presidents
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
