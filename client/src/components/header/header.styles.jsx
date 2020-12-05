import styled from 'styled-components';
import {Link} from 'react-router-dom';





export const HeaderContainer = styled.div`
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: space-between;




      @media screen and (max-width:800px){
            height:60px;
            padding:10px;
            margin-bottom:20px;

      }

      @media screen and (max-width:450px){
            flex-direction:column;
            align-items:center;
            justify-content:center;
             margin:30px 0;
      }

      
`;



export const LogoContainer = styled(Link)`
      height: 100%;
      width: 70px;
      padding: 25px;
      

      @media screen and (max-width:800px){
            width:50px;
            padding:0;
      }

      @media screen and (max-width:450px){
            margin-bottom:10px;
      }
`;


export const OptionsContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;


      @media screen and (max-width:800px){
            width:80%;
      }


      @media screen and (max-width:450px){
            width:100%;
            justify-content:center;
 
      }

`;


export const OptionLink = styled(Link)`
   padding:10px 15px;
   cursor:pointer;
`;



