import React from 'react';

import {CustomButtonContainer} from './custom-button.styles.jsx';




const CustomButton = props => {

   return(
   <CustomButtonContainer {...props}>
      {props.children}
   </CustomButtonContainer>
)}


export default CustomButton;



