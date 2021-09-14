import React, { useEffect} from 'react';
import { TstateProp } from './FilmDetails.connect';
import CastFilms from '../../../../components/CastFilm/CastFilm';
import RecomendFilm from '../../../../components/RecomendFilm/RecomendFilm';
import DetailHeadTpl from '../../../../template/detail/DetailHead_tpl';
import DetailTpl from '../../../../template/detail/Detail_tpl';
import { DetailItemPoster } from '../../../../components/DetailFilmIItem/DetailItemPoster';
import { DetailItemInfo } from '../../../../components/DetailFilmIItem/DetailItemInfo';

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
    
    console.log(detailsFilme);

    useEffect(()=>{
        props.loadFilmDetails(id)
        
    }, [id])
    
    //console.log(detailsFilme.backdrop_path)

    return (
        <div className="buster-light">
            <DetailHeadTpl bgpic={detailsFilme.backdrop_path} />
            <DetailTpl>
                <DetailItemPoster detailflim={detailsFilme}  />
                <DetailItemInfo detailflim={detailsFilme} />
                <RecomendFilm Detailid={id} />
            </DetailTpl>
            
            
            
        </div>
    )
}

export default FilmDetails