import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Favourites from 'routes/Favourites/Favourites';
import Home from 'routes/Home/Home';
import LogIn from 'routes/LogIn/LogIn';
import Recipes from 'routes/Recipes/Recipes';
import SearchByIngredient from "/routes/SearchByIngredient/SearchByIngredient";
import SearchByName from "/routes/SearchByName/SearchByName";
import Settings from "/routes/Settings/Settings";
import SignUp from "/routes/SignUp/SignUp";
import SingleRecipe from "/routes/SingleRecipe/SingleRecipe";



ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Favorites" component={Favourites}/>
        <Route path="/LogIn" component={LogIn}/>
        <Route path="/Recipes" component={Recipes}/>
        <Route path="/SearchByIngredient" component={SearchByIngredient}/>
        <Route path="/SearchByName" component={SearchByName}/>
        <Route path="/Settings" component={Settings}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/SingleRecipe" component={SingleRecipe}/>
    </Switch>
</BrowserRouter>

    ,
  document.getElementById('root')
);
