import { gql } from "apollo-boost";
import { addItemToCart } from "./cart.utils";

export const typeDefs = gql`
  extend type Mutation {
    toggleCartHidden: Boolean!
  }
`;

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (obj, args, { cache }) => {
      const { cartHidden } = cache.readQuery({ query: GET_CART_HIDDEN });
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden }
      });
    },
    addItemToCart: (obj, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });
      const newCartItems = addItemToCart(cartItems, item);
      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems }
      });
      return newCartItems;
    }
  }
};
