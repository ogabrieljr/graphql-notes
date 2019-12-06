import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCarthidden @client
  }
`;

export default function cartContainer() {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} />}
    </Mutation>
  );
}
