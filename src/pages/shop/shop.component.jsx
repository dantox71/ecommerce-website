import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component{

 
     unsubscribeFromSnapshot = null;

      componentDidMount(){
         
         const {fetchCollectionsStartAsync} = this.props;
         
         fetchCollectionsStartAsync();
   
     }

      render(){
         const {
            match,
            isCollectionLoaded
         } =  this.props;
       
             
         return(
            <div className="shop-page">           
               <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />} /> 
               <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
            </div>   
)}};





const mapStateToProps = createStructuredSelector({
   isCollectionLoaded:selectIsCollectionsLoaded
});   

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),

 })


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);