import React from "react";
import { connect } from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";
import CollectionPreview from "../preview-collection/preview-collection.component";

import './collections-overview.styles.scss'



const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {console.log('COLLECTION OVERVIEW', collections)}
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
})

export default connect(mapStateToProps)(CollectionOverview);
