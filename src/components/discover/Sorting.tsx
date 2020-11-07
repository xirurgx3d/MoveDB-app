/* eslint-disable jsx-a11y/anchor-is-valid */
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
        <div className="tabs">
				<ul className="tab-links" onClick={e => handleSort(e,params) }>
					<li  className="active"><a data-sort="popularity.desc">#Рейтинг</a></li>
					<li><a data-sort="release_date.desc" > #По дате</a></li>
					<li><a data-sort="vote_average.desc" >  #Голоса  </a></li>
					                       
		    </ul>
        </div>
    )
}
export default Sorting