import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';






export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    
    @media screen and (max-width:500px){
        justify-content:center;
        align-items:center;
    }

`;



export const SignUpTitle = styled.h2`
    margin: 10px 0;
`;


export const SignUpButton = styled(CustomButton)`
    margin:10px 0;
    width:200px;
`;