import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



const StripeCheckoutButton = ({price}) => {

   const priceForStripe = price * 100; 
   const publishableKey = 'pk_test_DUoCgRqIc3uO0r0z0A9rIdlS00pOrkGnQz';

   
   const onToken = async token => {

    
      try {
         const response = await axios({
            url:'payment',
            method:'post',
            data:{
               amount:priceForStripe,
               token
            }
         });
         

         alert('Payment successful');
         
      } catch (err) {
         console.log(err);
         alert(
            'There was an issue with your payment. Please make sure You use correct credit card.'
         );
      }
         
   }



   return(
      <StripeCheckout 
         label="Pay Now"
         name="DŁ Clothing Ltd."
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
      />
   )
}

export default StripeCheckoutButton;