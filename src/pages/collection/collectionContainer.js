import React from "react";
import { gql } from "apollo-boost";
import Spinner from "../../components/spinner/spinner.component";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { Query } from "react-apollo";

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
  return (
    <Query
      query={GET_COLLECTION_BY_TITLE}
      variables={{ title: match.params.collectionId }}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;
        if (error) return <p>Error</p>;
        const { title, items } = data.getCollectionsByTitle;
        return (
          <div>
            <h2 className="title">{title}</h2>
            <div className="items">
              {items.map(item => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
            ;
          </div>
        );
      }}
    </Query>
  );
}
