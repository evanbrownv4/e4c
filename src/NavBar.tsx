import { NavLink } from "react-router-dom";
import e4c_logo from "./assets/e4c.png";
import "./NavBar.css"

function E4CLogo() {
  return (
    <img
      className="titleImage"
      src={e4c_logo}
      alt="Engineering For Change logo"
    />
  );
}

export default function TitleCard() {
  return (
    <div className="titleCard">
      <div className="titleGroup">
        <E4CLogo />
        <h1 className="titleText">Engineering 4 Change</h1>
      </div>

      <div className="navLinks">
        <NavLink to="/" className={({ isActive }) => isActive ? "navButton active" : "navButton"}>
          Home
        </NavLink>
        <NavLink to="/committee" className={({ isActive }) => isActive ? "navButton active" : "navButton"}>
          Committee
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "navButton active" : "navButton"}>
          Projects
        </NavLink>
        <NavLink to="/contactus" className={({ isActive }) => isActive ? "navButton active" : "navButton"}>
          Contact us
        </NavLink>
      </div>
    </div>
  );
}
