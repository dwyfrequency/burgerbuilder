import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

export default props => {
  const transformedIngredientsArray = Object.keys(props.ingredients)
    .map((
      igKey // creates blank array with length of amount of ingredients
    ) =>
      [...Array(props.ingredients[igKey])].map((_, idx) => (
        <BurgerIngredient key={igKey + idx} type={igKey} />
      ))
    ) // flattens array if there are any items with 0
    .reduce((accum, item) => {
      return accum.concat(item);
    }, []);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredientsArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
