import React from "react";

import "./collection.styles.scss";
import CollectionContainer from "./collectionContainer";

const CollectionPage = ({ match }) => {
  return (
    <div className="collection-page">
      <CollectionContainer match={match} />
    </div>
  );
};

export default CollectionPage;
