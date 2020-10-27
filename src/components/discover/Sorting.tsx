import React, { useCallback, useEffect} from 'react';
import { useDispatch } from 'react-redux'

const Sorting:React.FC = (props) =>{
    const dispatch = useDispatch()
    const handleSort = useCallback(
      () => dispatch({ type: 'increment-counter' }),
      [dispatch]
    )
    return (
        <>
            <div onClick={handleSort}> 
                <span  data-sort="popularity.desc">рейтинг / </span>
                <span  data-sort="release_date.desc">по дате / </span>
                <span  data-sort="vote_average.desc">голоса / </span>
            </div>
        </>
    )
}
export default Sorting