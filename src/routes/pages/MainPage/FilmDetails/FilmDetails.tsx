import React, { useEffect} from 'react';
import { TstateProp } from './FilmDetails.connect';
import CastFilms from '../../../../components/CastFilm/CastFilm';
import RecomendFilm from '../../../../components/RecomendFilm/RecomendFilm';
import DetailHeadTpl from '../../../../template/detail/DetailHead_tpl';
import DetailTpl from '../../../../template/detail/Detail_tpl';

interface IFilmDetails extends TstateProp {
    match:{
        params:number
    },
    loadFilmDetails: (id: number) => void,
    detailsFilme:any
}

const FilmDetails:React.FC<IFilmDetails> = (props:IFilmDetails) =>{
    const id = props.match.params;
    const {detailsFilme} = props
    
    

    useEffect(()=>{
        props.loadFilmDetails(id)
        
    }, [id])
    
    //console.log(detailsFilme.backdrop_path)

    return (
        <div className="buster-light">
            <DetailHeadTpl bgpic={detailsFilme.backdrop_path} />
            <DetailTpl />
            <h1>Фильм</h1>
            <CastFilms casts={detailsFilme.cast} />
            <RecomendFilm Detailid={id} />
        </div>
    )
}

export default FilmDetails