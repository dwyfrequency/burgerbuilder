import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from "../../hoc/Aux";
// need to add .module to have it work with reactscripts > 2.0.0
import classes from "./Layout.module.css";
const Layout = props => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
