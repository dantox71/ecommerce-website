import React from 'react';

import {CollectionPreviewContainer,TitleContainer,PreviewContainer} from './collection-preview.styles.jsx';
import CollectionItem from '../collection-item/collection-item.component.jsx';





const CollectionPreview = ({title,items}) => {


   console.log(title,items);
   return(
      <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
               {  
                  items.filter((item,idx) => idx < 4).map(item => (
                     <CollectionItem key={item.id} item={item}/>
               ))}
            </PreviewContainer>
      </CollectionPreviewContainer>
   )  
}



export default CollectionPreview;