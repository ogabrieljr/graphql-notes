import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import CartDropdown from "./cart-dropdown.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export default function CartDopdownContainer() {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  const { data } = useQuery(GET_CART_ITEMS);
  const { cartItems } = data;
  return <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />;
}
