import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  // Array(5) [ {…}, {…}, {…}, {…}, {…} ]
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      // Object { title: "Hats", routeName: "hats", items: (9) […] }
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
