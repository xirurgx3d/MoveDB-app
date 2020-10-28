import React, { useCallback, useEffect} from 'react';
import { useDispatch} from 'react-redux'
import { getDiscoverRequest } from '../../redux/reducers/reduceFilm/action/actions';
import { Ipametrs } from '../../routes/pages/MainPage/FilmList/Filmlist';

const Sorting:React.FC<Ipametrs> = (props) =>{
    const dispatch = useDispatch()
    const {params} = props

    const handleSort = useCallback((e,params) => {
        const sortVal = e.target.dataset.sort
        if(params.sort_by === sortVal) return
        dispatch(getDiscoverRequest({...params,sort_by:sortVal}))
    },[dispatch])

    //console.log(params)
    return (
        <>
            <div onClick={e => handleSort(e,params) }> 
                <span  data-sort="popularity.desc">рейтинг / </span>
                <span  data-sort="release_date.desc">по дате / </span>
                <span  data-sort="vote_average.desc">голоса / </span>
            </div>
        </>
    )
}
export default Sorting