import React from 'react'
import { Switch,Route } from 'react-router';

import MenuList from './Components/MenuList/menu-list.component';
import Shop from './Components/ShopPage/shop.component';
import SignIn from './Components/SignIn/sign-in.component';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const Routing  = ({currentUser}) => {
    const toRenderSignIn = () => {
      if(currentUser) {
        return (
          <Redirect to="/"/>
        );
      }
      else {
        return(
          <SignIn/>
        );
      }
    }
    return (
    <Switch>
        <Route exact path="/" component={MenuList}></Route>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" render={toRenderSignIn} />
        
      </Switch>

    );
}

const mapStateToProps = ({user}) => {
  return({
    currentUser:user.currentUser
  })
}

export default connect(mapStateToProps)(Routing);