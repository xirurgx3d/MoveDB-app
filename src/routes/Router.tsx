import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import FilmDetails from './pages/MainPage/FilmDetails/FilmDetails.connect';
import HomePage from './pages/MainPage/Home';


const Router:React.FC = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/film-detail/:id" component={FilmDetails} />
        </Switch>
    </HashRouter>
)

export default Router