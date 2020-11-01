import React from 'react';
import {connect} from 'react-redux';






import {CollectionItemContainer,BackgroundImage,AddButton,NameContainer,PriceContainer,CollectionFooterContainer} from './collection-item.styles.jsx';

import {addItem} from '../../redux/cart/cart.actions';



const CollectionItem = ({item,addItem}) => {
   
   const {name,price,imageUrl} = item;
   
   return(
   <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      
       <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted={true}>Add to cart</AddButton>
      
   </CollectionItemContainer>
)};


const mapDispatchToProps = dispatch => ({
   addItem:item => dispatch(addItem(item))
});


export default connect(null,mapDispatchToProps)(CollectionItem);
