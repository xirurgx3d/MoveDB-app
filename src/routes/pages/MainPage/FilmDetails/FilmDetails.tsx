/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {TinitialStateParams} from "../../../../redux/reducers/reduceFilm/reducer"
import { TstateProp } from './FilmDetails.connect';

interface IFilmDetails extends TstateProp {
    match:{
        params:number
    },
    loadFilmDetails:(id:number) => void
}
//params: TParams
const FilmDetails:React.FC<IFilmDetails> = (props:IFilmDetails) =>{
    const id = props.match.params;
    const {detailsFilme} = props
    //console.log(props.detailsFilme.title)
    useEffect(()=>{
        props.loadFilmDetails(id)
    },[id])

    return (
        <div>
            <h1>Фильм</h1>
        </div>
    )
}

export default FilmDetails