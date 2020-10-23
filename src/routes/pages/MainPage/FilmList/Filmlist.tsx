/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { TstateProp } from './Filmlist.connect';
import {TinitialStateParams} from "../../../../redux/reducers/reduceFilm/reducer"

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

    type TdiscoverData = typeof discover[0]
    console.log('render')
    
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
            <div onClick={handleSort}> 
                <a  data-sort="popularity.desc">рейтинг / </a>
                <a  data-sort="release_date.desc">по дате / </a>
                <a  data-sort="vote_average.desc">голоса / </a>
            </div>
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