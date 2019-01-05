import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItem.module.css";

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem>A Link</NavigationItem>
  </ul>
);

export default NavigationItems;
