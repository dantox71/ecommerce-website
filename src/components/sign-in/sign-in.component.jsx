import React,{useState} from 'react';
import {connect} from 'react-redux';

import {
   SignInContainer,
   SignInTitle,
   ButtonsBarContainer
} from  "./sign-in.styles.jsx";


import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';




import {
   googleSignInStart,
   emailSignInStart
} from  '../../redux/user/user.actions';


const SignIn = ({googleSignInStart,emailSignInStart}) => {

   const [userCredentials,setUserCredentials] = useState({
      email:'',
      password:''
   })


   const {email,password} = userCredentials;

   
   const handleSubmit = async e => {
         e.preventDefault();
         console.log('??????');
         emailSignInStart(email,password);
   }


   const handleChange = e => {
      const {value,name} = e.target;

 
      setUserCredentials({
         ...userCredentials,
         [name]:value
      })

   }




     return(
        <SignInContainer>
           <SignInTitle>I already have an account</SignInTitle>
           <span>Sign in with your email and password</span>


           <form onSubmit={handleSubmit}>
              <FormInput 
              label={"Email"}
              type="email"
              name="email"
              value={email}
              handleChange={handleChange}
              required
                 />
        
              <FormInput
               type="password"
               name="password" 
               value={password} 
               handleChange={handleChange}
               label={"Password"}
               required 
               />
  

              <ButtonsBarContainer>
                 <CustomButton type="submit">Submit Form</CustomButton>{'   '}
                 <CustomButton  type="button"  isGoogleSignIn={true} onClick={googleSignInStart}>Sign in with Google</CustomButton>
              </ButtonsBarContainer>
           </form>



        </SignInContainer>
     )
}



const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
});


export default connect(null,mapDispatchToProps)(SignIn);