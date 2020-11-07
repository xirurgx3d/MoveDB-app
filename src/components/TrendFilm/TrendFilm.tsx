/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { createSelector } from 'reselect'
import Api from '../../api/Api';


const TrendFilm:React.FC = () =>{
    const [trendFilm, setTrendFilm] = useState<Array<number> | null >(null)
    useEffect(()=>{
        Api.getTrending().then(res =>{
           setTrendFilm(res.data.results.slice(1,13))
        })
    },[])


    return (
        <>
            
            {
               trendFilm?.map((val:any,index:number)=>{
                   return (
                     <div className="movie-item">
                        <div className="mv-img">
                            <a href="#">
                                <img src="images/uploads/slider2.jpg" alt="" width="285" height="437"/>
                            </a>
                        </div>
                        <div className="title-in">
                            <div className="cate">
                                <span className="yell"><a href="#">action</a></span>
                            </div>
                            <h6><a href="#">The revenant</a></h6>
                            <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
                        </div>
                    </div>
                   )
               })
            }
            
        </>
    )
}
export default TrendFilm

/**
 * 
 * <li key={index}>
                                <Link to={`film-detail/${eval.id}`}>
                                <span>{eval.title}</span>
                            </Link>
                            </li>
 * 
 */