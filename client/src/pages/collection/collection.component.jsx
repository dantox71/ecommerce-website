import React from 'react';
import {connect} from 'react-redux';


import CollectionItem from '../../components/collection-item/collection-item.component';


import {selectShopCollection} from '../../redux/shop/shop.selectors';


import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
  } from './collection.styles.jsx';


const CollectionPage = ({collection}) => {
  const {title,items} = collection;


   return(
      <CollectionPageContainer>
        <CollectionTitle className="title">{title}</CollectionTitle>
        <CollectionItemsContainer >
          {
            items.map(item => <CollectionItem key={item.id} item={item} />)
          }
        </CollectionItemsContainer >
  
      </CollectionPageContainer>
)}


// mapStateToProps functions takes also second argument, that is optional and is the same as component props.
const mapStateToProps = (state,ownProps) => ({
  collection:selectShopCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);
