/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {TinitialStateParams} from "../../../../redux/reducers/reduceFilm/reducer"

interface IFilmDetails {
    match:{
        params:number
    }
}
//params: TParams
const FilmDetails:React.FC<IFilmDetails> = (props:IFilmDetails) =>{
    const id = props.match.params;
    console.log(id)

    return (
        <div>
            <h1>Фильм</h1>
        </div>
    )
}

export default FilmDetails