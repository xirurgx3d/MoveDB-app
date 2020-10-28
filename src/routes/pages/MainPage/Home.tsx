import React, { useState, useEffect } from 'react';
import Genres from '../../../components/discover/Genres';
import Filmlist from './FilmList/Filmlist.connect';

const HomePage:React.FC = ():JSX.Element => (
    <div>
        <span>home page</span>
        <Genres />
        <Filmlist />
    </div>
)
export default HomePage