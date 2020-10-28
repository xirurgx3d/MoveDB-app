/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import { TstateProp } from './Filmlist.connect';
import {TinitialStateParams} from "../../../../redux/reducers/reduceFilm/reducer"
import Sorting from '../../../../components/discover/sorting';
import { useDispatch } from 'react-redux';
import { getDiscoverMoreRequest, getDiscoverRequest } from '../../../../redux/reducers/reduceFilm/action/actions';
import { createSelector } from 'reselect';

export interface Ipametrs{
    params:TinitialStateParams
}




const Filmlist:React.FC<TstateProp> = (props:TstateProp) =>{
    const dispatch = useDispatch()
    const {discover,params} = props
    const ref = useRef(null)

    useEffect(() => {
        dispatch(getDiscoverRequest())
        //props.loadDiscover()
    },[])
    
    const handleScroll = () =>{
        let pageCount = params.page
        //dispatch(getDiscoverRequest({...params,page:pageCount+1}))
        
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            window.removeEventListener("scroll", handleScroll);
            setTimeout(()=> dispatch(getDiscoverMoreRequest({...params,page:pageCount+1})),500)
            

        }
        console.log((window.innerHeight + window.scrollY))

        console.log('h',document.body.offsetHeight)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [params.page]);

    
    
    return (
        <div>Filmlist
            <Sorting params={params} />
            <button onClick={handleScroll} >moreee</button>
            <ul >
                {
                    discover.map((value:any, index) => {
                        return (<li key={index}>
                            <Link to={`film-detail/${value.id}`}>
                                <h2>{value.title}</h2>
                            </Link>
                            
                        </li>)
                    })
                }
            </ul>
        </div>

    )
}
export default Filmlist