import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

export default function AddTodo() {
  const [ToggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);

  return <CartIcon toggleCartHidden={ToggleCartHidden} />;
}
