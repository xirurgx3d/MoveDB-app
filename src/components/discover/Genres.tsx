import React, { useCallback, useEffect, useState} from 'react';
import { useDispatch, useSelector, useStore} from 'react-redux'
import Api from '../../api/Api';
import { getDiscoverRequest } from '../../redux/reducers/reduceFilm/action/actions';
import { TinitialStateParams } from '../../redux/reducers/reduceFilm/reducer';
import { Iredusers } from '../../redux/reducers/rootReducer';
import { Ipametrs } from '../../routes/pages/MainPage/FilmList/Filmlist';


const Genres:React.FC = () =>{
    const [genres,setGenres] = useState<Array<number>>([])
    const dispatch = useDispatch()
    const params = useSelector<Iredusers,TinitialStateParams>(state => state.films.params)

    useEffect(()=>{
        Api.AllgetGenres().then(res =>{
            setGenres(res.data.genres)
        })
    },[])
    
    const handleGenre = useCallback((e,id:number,params) => {
        if(params.with_genres === id) return
        dispatch(getDiscoverRequest({...params,page:1,with_genres:id}))
    }, [dispatch])

    return (
        <>
            <ul>
                {
                    genres.map((data:any, index) =>{
                        return (<li key={index} className={(params.with_genres === data.id) && 'gener-active' || ''}>
                            <a onClick={e => handleGenre(e,data.id,params)}>{data.name}</a>
                        </li>)
                    })
                }
            </ul>
        </>    
    )
}
export default Genres