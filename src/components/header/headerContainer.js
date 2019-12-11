import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Header from "./header.component";

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

export default function HeaderContainer() {
  const { loading, error, data } = useQuery(GET_CART_HIDDEN);
  const { cartHidden } = data;

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <Header hidden={cartHidden} />;
}
