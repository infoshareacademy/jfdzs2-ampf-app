// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-reboot.css';


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Favourites from './routes/Favourites/Favourites';
import Home from './routes/Home/Home';
import LogIn from './routes/LogIn/LogIn';
import Recipes from './routes/Recipes/Recipes';
import Search from './routes/Search/Search';
import SearchByIngredient from "./routes/SearchByIngredient/SearchByIngredient";
import SearchByName from "./routes/SearchByName/SearchByName";
import Settings from "./routes/Settings/Settings";
import SignUp from "./routes/SignUp/SignUp";
import SingleRecipe from "./routes/SingleRecipe/SingleRecipe";




ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Favourites" component={Favourites}/>
        <Route path="/LogIn" component={LogIn}/>
        <Route path="/Recipes/:ingredients" component={Recipes}/>
        <Route path="/Search" component={Search}/>
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
