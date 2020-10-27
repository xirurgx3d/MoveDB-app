import React, { useEffect} from 'react';
import { TstateProp } from './FilmDetails.connect';
import CastFilms from '../../../../components/CastFilm/CastFilm';
import RecomendFilm from '../../../../components/RecomendFilm/RecomendFilm';

interface IFilmDetails extends TstateProp {
    match:{
        params:number
    },
    loadFilmDetails:(id:number) => void
}

const FilmDetails:React.FC<IFilmDetails> = (props:IFilmDetails) =>{
    const id = props.match.params;
    const {detailsFilme} = props
    
    

    useEffect(()=>{
        props.loadFilmDetails(id)
        
    },[id])

    return (
        <div>
            <h1>Фильм</h1>
            <CastFilms casts={detailsFilme.cast} />
            <RecomendFilm Detailid={id} />
        </div>
    )
}

export default FilmDetails