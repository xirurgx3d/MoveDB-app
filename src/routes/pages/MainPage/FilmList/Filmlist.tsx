/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect} from 'react';
import { Link } from "react-router-dom";
import { TstateProp } from './Filmlist.connect';
import {TinitialStateParams} from "../../../../redux/reducers/reduceFilm/reducer"
import Sorting from '../../../../components/discover/sorting';

// @TstateProp из  Filmlist.connect
interface IFilmListProps extends TstateProp {
    loadDiscover: (params?: TinitialStateParams) => void,   
 }

const Filmlist:React.FC<IFilmListProps> = (props:IFilmListProps) =>{
    const {discover,genres,params} = props

    useEffect(() => {
        props.loadDiscover()
    },[])

    const handleSort = (e:any) => {
        const sortVal = e.target.dataset.sort
        props.loadDiscover({...params,sort_by:sortVal})
    }

    const genresClick = (e:any,id:number) =>{
        if(params.with_genres === id) return
        
        // обновляем до первой страницы
        props.loadDiscover({...params,page:1,with_genres:id})
    }
    const handleScroll = () =>{
        let pageCount = params.page
        //console.log(pageCount)
        props.loadDiscover({...params,page:pageCount+1})
    }

    //console.log('render')
    
    return (
        <div>Filmlist
            <ul>
                {
                    genres.map((data:any, index) =>{
                        return (<li key={index}>
                            <a onClick={e => genresClick(e,data.id)}>{data.name}</a>
                        </li>)
                    })
                }
            </ul>
            <Sorting />
            <button onClick={handleScroll} >moreee</button>
            <ul>
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