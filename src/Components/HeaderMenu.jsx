import React from 'react'
import s from "../Styles/Allstyles.component.css";
import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div >
      <NavLink to="/firstPage" activeClassName={s.active}>
        First page
      </NavLink>
      <NavLink to="/secondPage" activeClassName={s.active}>
        Second page
      </NavLink>
    </div>
  );
};

export default HeaderMenu;
