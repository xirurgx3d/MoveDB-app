import React from 'react';
import SerchFilm from '../../../components/SerchFilm/SerchFilm';
import Router from '../../Router';

const Main:React.FC = ():JSX.Element => (
    <div>
        <span>MAIN</span>
        <SerchFilm />
        <Router/>
    </div>
)
export default Main