import React from 'react';
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




class SignIn extends React.Component{
   constructor(props){

      super(props);



      this.state = {
         email:'',
         password:''
      }
   }

   handleSubmit = async e => {
       e.preventDefault();


       const {emailSignInStart} = this.props;
       const {email,password} = this.state;

       emailSignInStart(email,password);
   }

   handleChange = e => {
      const {value,name} = e.target;

      this.setState({[name]:value})

   }


   render(){
      
      const {email,password} = this.state;
      
      const {googleSignInStart} = this.props;


      return(
         <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>


            <form onSubmit={this.handleSubmit}>
               <FormInput 
               label={"Email"}
               type="email"
               name="email"
               value={email}
               handleChange={this.handleChange}
               required
                  />
         
               <FormInput
                type="password"
                name="password" 
                value={password} 
                handleChange={this.handleChange}
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

}
const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
});


export default connect(null,mapDispatchToProps)(SignIn);