import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./BurgerIngredient/BurgerIngredient.module.css";

export default props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="bread-top" />
    </div>
  );
};
