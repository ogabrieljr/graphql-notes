import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import CollectionItem from "./collection-item.component";

const ADD_ITEM_TO_CART = gql`
  mutation addItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

export default function CollectionItemContainer(props) {
  const [addItemToCart] = useMutation(ADD_ITEM_TO_CART);
  return (
    <CollectionItem
      addItem={item => addItemToCart({ variables: { item } })}
      addItemToCart={addItemToCart}
      {...props}
    />
  );
}
