import React from 'react'
import { Switch,Route } from 'react-router';

import MenuList from './Components/MenuList/menu-list.component';
import Shop from './Components/ShopPage/shop.component';
import SignIn from './Components/SignIn/sign-in.component';
const Routing  = () => {
    return (
    <Switch>
        <Route exact path="/" component={MenuList}></Route>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={SignIn}/>
        
      </Switch>

    );
}

export default Routing;