import React from 'react';

import {GroupContainer,FormInputContainer,FormInputLabel} from './form-input.styles.jsx';


const FormInput  = ({handleChange,label,...otherProps}) => (

      <GroupContainer>
         <FormInputContainer  onChange={handleChange}  {...otherProps} />
         {
            label ? 
            (<FormInputLabel otherProps={otherProps}>
               {label}
            </FormInputLabel>)

            : null
         }
      </GroupContainer>
);


export default FormInput;