import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import CollectionPreview from '../collection-preview/collection-preview.component';

import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selectors';

import {CollectionsOverviewContainer} from './collections-overview.styles.jsx';


const CollectionsOverview = ({collections}) => (
   <CollectionPreview>
      {
                  collections.map(({id,...otherCollectionsProps}) => (
                     <CollectionPreview key={id} {...otherCollectionsProps} />
                  ))
               }
   </CollectionPreview>
);


const mapStateToProps = createStructuredSelector({
   collections:selectShopCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionsOverview);

