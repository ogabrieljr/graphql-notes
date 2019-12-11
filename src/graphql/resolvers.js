import { gql } from "apollo-boost";

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

export const resolvers = {
  Mutation: {
    toggleCartHidden: (obj, args, { cache }) => {
      const { cartHidden } = cache.readQuery({ query: GET_CART_HIDDEN });
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden }
      });
    }
  }
};
