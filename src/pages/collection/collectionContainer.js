import React from "react";
import { gql } from "apollo-boost";
import Spinner from "../../components/spinner/spinner.component";
import { useQuery } from "@apollo/react-hooks";
import CollectionItem from "../../components/collection-item/collection-item.component";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

export default function CollectionContainer({ match }) {
  const { loading, error, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: match.params.collectionId }
  });

  if (loading) return <Spinner />;
  if (error) return `Error! ${error}`;

  console.log(data.getCollectionsByTitle.items);
  const { title, items } = data.getCollectionsByTitle;

  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
