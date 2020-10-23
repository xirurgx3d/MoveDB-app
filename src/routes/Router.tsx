import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import FilmDetails from './pages/MainPage/FilmDetails/FilmDetails';
import Home from './pages/MainPage/FilmList/Filmlist.connect';


const Router:React.FC = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/film-detail/:id" component={FilmDetails} />
        </Switch>
    </HashRouter>
)

export default Router