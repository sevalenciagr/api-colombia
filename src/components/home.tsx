import { Link } from "react-router-dom";

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.svgrepo.com/show/242329/colombia.svg"
            alt="Colombia"
            style={{ width: "80px", height: "50px" }}
          />
        </a>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link fw-bolder fs-4"
              aria-current="page"
              href="#"
            >
              Colombia
            </a>
          </li>
          <li className="nav-item">
            <Link to="/departments" className="nav-link fw-bolder fs-4">
              Departments
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cities" className="nav-link fw-bolder fs-4">
              Cities and Towns
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tourists" className="nav-link fw-bolder fs-4">
              Tourists
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/presidents" className="nav-link fw-bolder fs-4">
              Presidents
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}
