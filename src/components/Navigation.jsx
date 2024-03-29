import { Link } from "react-router-dom";
import { AccountIcon } from "../icons/AccountIcon";

function Navigation() {
  return (
    <div className="fs-nav" id="fsNav">
      <div className="fs-nav-box animate__animated animate__fadeInLeft">
        <nav className="fs-nav-links" id="fsNavLinks">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#nature">Nature</a>
            </li>
            <li>
              <a href="#inventory">Inventory</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#investor-relations">Investor Relations</a>
            </li>
          </ul>

          <div className="account-link">
            <Link to="/login" className="fs-nav-account">
                <AccountIcon /> {" "}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
