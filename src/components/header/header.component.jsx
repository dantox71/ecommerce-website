import React from 'react';
import {connect} from 'react-redux';



import {ReactComponent as Logo} from '../../assets/crown.svg';


import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';


import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {createStructuredSelector} from 'reselect';





import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from  './header.styles.jsx';

const Header = ({currentUser,hidden}) => {

  
   
   return (
      <HeaderContainer>

            <OptionLink className="logo-container" to="/">
               <Logo className="logo" />
            </OptionLink>



            <OptionsContainer>
                  <OptionLink to="/shop">
                     SHOP
                  </OptionLink>

                  <OptionLink to="/contact">
                     CONTACT
                  </OptionLink>



                  {
                     currentUser ? 
                     <OptionLink as="div" onClick={() => auth.signOut()}>
                        SIGN OUT
                     </OptionLink>
                     :
                     <OptionLink  to="/signin">
                           SIGN IN
                     </OptionLink>
                  }

                  <CartIcon />
           </OptionsContainer>

            {hidden ? null : <CartDropdownContainer />}
      </ HeaderContainer >
)}




const mapStateToProps = createStructuredSelector({
   currentUser:selectCurrentUser,
   hidden:selectCartHidden
});



export default connect(mapStateToProps)(Header);
