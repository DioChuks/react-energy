import MenuButton from "./MenuButton";
import {HomeIcon} from "./template/HomeIcon";
import {NatureIcon} from "./template/NatureIcon";
import {StoreIcon} from "./template/StoreIcon";
import {BoxIcon} from "./template/BoxIcon";
import { UsersIcon } from "./template/UsersIcon";
import { AccountIcon } from "./template/AccountIcon";
import React, { useState } from "react";

function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="fs-nav-mobile-links">
      <MenuButton isActive={isNavOpen} onClick={toggleNavigation} />
      <nav className={`fs-nav-m-links ${isNavOpen ? "active" : ""}`} id="fsNavMLinks">
        <ul>
          <li>
            <a className="nav-link" href="">
              <span>
                <HomeIcon />{" "}
              </span>
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#nature">
              <span>
                <NatureIcon />{" "}
              </span>
              Nature
            </a>
          </li>
          <li>
            <a className="nav-link" href="">
              <span>
                <StoreIcon />{" "}
              </span>
              Inventory
            </a>
          </li>
          <li>
            <a className="nav-link" href="">
              <span>
                <BoxIcon />{" "}
              </span>
              Services
            </a>
          </li>
          <li>
            <a className="nav-link" href="">
              <span>
                <UsersIcon />{" "}
              </span>
              Investor Relations
            </a>
          </li>
          <li>
            <a className="nav-link" href="">
              <span>
                <AccountIcon />{" "}
              </span>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
