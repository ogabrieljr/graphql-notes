import React from "react";
import { useQuery } from "@apollo/react-hooks";
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
  const { loading, error, data } = useQuery(COLLECTIONS_DATA);

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;

  return (
    <div>
      {Object.values(data).map(items =>
        items.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      )}
    </div>
  );
}
