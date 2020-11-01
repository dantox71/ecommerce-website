import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';




import {
   CartDropdownContainer,
   EmptyMessageContainer,
   CartItemsContainer,
   CartDropdownButton
} from './cart-dropdown.styles.jsx';

import CartItem from '../cart-item/cart-item.component';

import {selectCartItems} from '../../redux/cart/cart.selectors';

import {toggleCartHidden} from '../../redux/cart/cart.actions';






const CartDropdown = ({cartItems,history,...otherProps}) => {
   

   const {dispatch} = otherProps;  
   
   return(
   <CartDropdownContainer>
      <CartItemsContainer>
         {
             cartItems.length ?
             cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
         
         }
      </CartItemsContainer>
      <CartDropdownButton onClick={() => {
         dispatch(toggleCartHidden());
         history.push('/checkout')
   }}>
      GOT TO CHECKOUT
      </CartDropdownButton>
   </CartDropdownContainer>
)}


const mapStateToProps = createStructuredSelector({
   cartItems:selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));


