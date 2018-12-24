import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const concatDuplicate = arr => {
  const [item, amount] = arr;
  if (amount === 1) {
    return [item];
  } else {
    return Array.isArray(item)
      ? concatDuplicate([item.concat(item[0]), amount - 1])
      : concatDuplicate([[item].concat(item), amount - 1]);
  }
};

export default props => {
  const transformedIngredientsArray = Object.entries(props.ingredients).reduce(
    (accum, arr) => accum.concat(...concatDuplicate(arr)),
    []
  );
  const BurgerIngredientJsx = transformedIngredientsArray.map((item, idx) => (
    <BurgerIngredient type={item} key={idx} />
  ));
  console.log(transformedIngredientsArray);
  return <div className={classes.Burger}>{BurgerIngredientJsx}</div>;
};
