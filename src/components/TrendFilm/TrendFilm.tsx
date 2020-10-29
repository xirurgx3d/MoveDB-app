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
            <h2>Тенды</h2>
            {
                        trendFilm?.map((val:any,index:number)=>{
                            return <li key={index}>
                                <Link to={`film-detail/${val.id}`}>
                                <span>{val.title}</span>
                            </Link>
                            </li>
                        })
                    }
            
        </>
    )
}
export default TrendFilm