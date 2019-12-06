import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Header from "./header.component";

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export default function headerContainer() {
  return (
    <Query query={GET_CART_HIDDEN}>
      {({ data: { cartHidden } }) => <Header cartHidden={cartHidden} />}
    </Query>
  );
}
