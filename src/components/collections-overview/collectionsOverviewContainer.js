import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Spinner from "../spinner/spinner.component";
import CollectionPreview from "../collection-preview/collection-preview.component";

const COLLECTIONS_DATA = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export default function CollectionsContainer() {
  return (
    <Query query={COLLECTIONS_DATA}>
      {({ data, loading, error }) => {
        if (loading) return <Spinner />;
        if (error) return <p>Error</p>;
        return data.collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ));
      }}
    </Query>
  );
}
