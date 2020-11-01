import React from 'react';


import {CartItemContainer,ItemDetailsContainer,ItemNameContainer,CartItemImage} from './cart-item.styles.jsx';






const CartItem = ({item:{imageUrl,price,name,quantity}}) => (
   <CartItemContainer>
      <CartItemImage src={imageUrl} alt="Cart item" />
      <ItemDetailsContainer>
         <ItemNameContainer>{name}</ItemNameContainer>
         <span className="price">
            {quantity} x {price}
         </span>
      </ItemDetailsContainer>
   </CartItemContainer>
) 


export default CartItem;