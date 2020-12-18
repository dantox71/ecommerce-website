import React from "react";

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles.jsx";

import CartItem from "../cart-item/cart-item.component";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, ...otherProps }) => {
  const { dispatch } = otherProps;

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GOT TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
