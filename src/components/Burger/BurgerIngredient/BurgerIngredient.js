import React from "react";
import classes from "BurgerIngredient.module.scss";

export default props => {
  let ingredients = null;
  switch (props.type) {
    case "bread-bottom":
      ingredients = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredients = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
    default:
      break;
  }
};
