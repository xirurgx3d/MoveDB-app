import React, { useState, useEffect } from 'react';
import Genres from '../../../components/discover/Genres';
import TrendFilm from '../../../components/TrendFilm/TrendFilm';
import GenersTpl from '../../../template/home/Geners_tpl';
import MoveItemTpl from '../../../template/home/MoveItem_tpl';
import Slider from '../../../template/home/Slider';
import Filmlist from './FilmList/Filmlist.connect';

const HomePage:React.FC = ():JSX.Element => (
    <>
    <Slider>
        <TrendFilm />
    </Slider>
    <MoveItemTpl left={<Filmlist />} right={<GenersTpl><Genres /></GenersTpl>} />
    </>
)
export default HomePage