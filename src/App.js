import React from 'react';


import { Switch, Route,Redirect } from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';



import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';



import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';







class App extends React.Component {
   
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {checkUserSession} = this.props;
        checkUserSession();
    }


    // Unsubscribe when component is about to be unmounted
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return ( 
          <div>
            <Header /> 
            <Switch >
              <Route exact path = '/' component = { HomePage }/> 
              <Route  path="/shop" component = { ShopPage } /> 
              <Route exact path = "/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} /> 
              <Route exact path = "/checkout" component={CheckoutPage} />
            </Switch> 
          </div>
        );
    }
}


const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    checkUserSession:() => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);