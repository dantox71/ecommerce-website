import React from 'react';


import "./sign-in.styles.scss";


import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';


class SignIn extends React.Component{
   constructor(props){

      super(props);



      this.state={
         email:'',
         password:''
      }
   }

   handleSubmit = e => {
       e.preventDefault();



       this.setState({email:'',password:''});



   }


   handleChange = e => {
      const {value,name} = e.target;

      this.setState({[name]:value})

   }



   render(){

      const {email,password} = this.state;
      
      return(
         <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>


            <form onSubmit={this.onSubmit}>
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
   


               <CustomButton type="submit">Submit Form</CustomButton>
      
            
            </form>



         </div>
      )



   }



}



export default SignIn;