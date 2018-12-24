import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      "bread-top": 1,
      salad: 1,
      bacon: 4,
      cheese: 1,
      meat: 3,
      "bread-bottom": 1
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
