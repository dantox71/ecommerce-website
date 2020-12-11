import styled from 'styled-components';


export const CollectionPageContainer = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
`;

export const CollectionTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
   display:grid;
   grid-template-columns:repeat(4,1fr);
   justify-content:center;
   align-items:cneter;
   grid-gap:10px;

   & > div {
      margin-bottom:30px;
   }

   @media screen and (max-width:800px){
      grid-template-columns:repeat(2,1fr);
      grid-gap:5px;
   }

   @media screen and (max-width:450px){
      grid-template-columns:repeat(1,1fr);
   }


`;