import React, { useReducer, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/Api'
import reducerDetail from '../../redux/reducers/FilmDetailsRedux';
import { initialStateDetail, ActionsDetail } from '../../redux/reducers/FilmDetailsRedux';
import { URL } from "../../redux/reducers/reduceFilm/constants/constants";

interface ICastFilms {
    casts:Array<number>
}
const CastFilms:React.FC<ICastFilms> = (props:ICastFilms) =>{
    const [state, dispatch] = useReducer(reducerDetail, initialStateDetail);
    const [spiner, setSpiner] = useState<boolean>(false)
    const ref  = useRef<HTMLDivElement>(null)

    const getCastFilm = async (id:number) =>{
       // заглушка для рендера,
        if(state.CreditsId === id) return
        setSpiner(true)
        ref.current?.scrollIntoView() 
        const result = await Api.getFilms({with_cast:id})
        dispatch(ActionsDetail.CastFilmResult({
            result:result.data.results,
            catid:id
        }))
        setSpiner(false)
    }
    
    
    return (
        <>
           
            
                {
                    props.casts.map((val: any, index: number) => {
                        
                        return (
                            <div key={index} className="cast-it">
                                <div className="cast-left">
                                    <img width='50' src={URL + val.profile_path} alt=""/>
                                    <a onClick={e=> getCastFilm(val.id)}>{val.name}</a>
                                </div>
                                <p>...  {val.character}</p>
                            </div>
                        )
                       
                    })
                }
           
            {
                spiner && <span>load</span>
            }
            <div ref={ref} className="credis">
            {   
                state.CreditsId && !spiner &&
                state.filmCredits.map((val: any, index: number) => {
                    
                     
                    return (
                        <div className="movie-item-style-2">
                            
                            <img width="150px" src={URL + val.poster_path} alt=""/>
                            <div className="mv-item-infor">
                                <h6>
                                    <Link to={`/film-detail/${val.id}`}>
                                        {val.title}
                                    </Link>
                                </h6>
                                <p className="rate"><i className="ion-android-star"></i><span>{val.vote_average}</span> /10</p>
                                <p className="describe">{val.overview}</p>
                                
                            </div>
                        </div>
                    )
                })
            }
            </div>

                    
                    

        </>    
    )
}
export default CastFilms