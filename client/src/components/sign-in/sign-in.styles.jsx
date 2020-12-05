import styled from 'styled-components';




export const SignInContainer = styled.div`
   width:380px;
   display:flex;
   flex-direction:column;



   @media screen and (max-width:1000px){
      margin-bottom:45px;
   }


   
   @media screen and (max-width:500px){
      justify-content:center;
      align-items:center;
  }
`;


export const SignInTitle = styled.h2`
   margin:10px 0;
`;

export const ButtonsBarContainer = styled.div`
   display:flex;
   justify-content:space-between;




 

   @media(max-width:800px){
      flex-direction:column;
      justify-content:center;
      align-items:flex-start;


      button{
         margin:10px 0;
         width:200px;
      }
   }



`;