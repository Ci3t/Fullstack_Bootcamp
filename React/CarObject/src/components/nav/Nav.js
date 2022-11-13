import React from "react";
import { getFirstToUpper } from "../../utils/carObj.utils";
import "./Nav.css";
function Nav(props) {
  const insertDepartments = () => {
    return (
      <div>
        <div>
          <h1 onClick={props.changeText}>Car Market</h1>
        </div>
        <div>
          <ul className="nav__ul">
            {props.departments.map((d) => (
              <li onClick={props.click} className="nav__li" key={d}>
                {getFirstToUpper(d)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  return <nav className="nav">{insertDepartments()}</nav>;
}

export default Nav;
