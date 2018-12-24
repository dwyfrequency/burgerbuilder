import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

// Takes array of [ingredient, amount of ingredient]
const createIngredientArray = arr => {
  const [item, amount] = arr;
  // if there is only one item return it
  if (amount === 1) {
    return Array.isArray(item) ? item : [item];
  } else {
    // if there are multiple items, see if we have already gone through an iteration and put it in an array. Create new array with item array and an amount for the recursion
    return Array.isArray(item)
      ? createIngredientArray([item.concat(item[0]), amount - 1])
      : createIngredientArray([[item].concat(item), amount - 1]);
  }
};

export default props => {
  const transformedIngredientsArray = Object.entries(props.ingredients).reduce(
    (accum, arr) => accum.concat(...createIngredientArray(arr)),
    []
  );
  const BurgerIngredientJsx = transformedIngredientsArray.map((item, idx) => (
    <BurgerIngredient type={item} key={idx} />
  ));
  console.log(transformedIngredientsArray);
  return <div className={classes.Burger}>{BurgerIngredientJsx}</div>;
};
