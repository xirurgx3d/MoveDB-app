import React, { useReducer, useState } from 'react';
import Api from '../../api/Api'
import reducerDetail from '../../redux/reducers/FilmDetailsRedux';
import {initialStateDetail,ActionsDetail} from '../../redux/reducers/FilmDetailsRedux';

interface ICastFilms {
    casts:Array<number>
}
const CastFilms:React.FC<ICastFilms> = (props:ICastFilms) =>{
    const [state, dispatch] = useReducer(reducerDetail, initialStateDetail);
    const [spiner,setSpiner] = useState<boolean>(false)

    const getCastFilm = async (id:number) =>{
       // заглушка для рендера,
        if(state.CreditsId === id) return
        setSpiner(true)
        const result = await Api.getFilms({with_cast:id})
        dispatch(ActionsDetail.CastFilmResult({
            result:result.data.results,
            catid:id
        }))
        setSpiner(false)
    }
    
    
    return (
        <>
            <h2>Актеры</h2>
            <ul>
                {
                    props.casts.map((val:any,index:number)=>{
                        return <li key={index} onClick={e=> getCastFilm(val.id)}>{val.name}</li>
                    })
                }
            </ul>
            {
                spiner && <span>load</span>
            }
            {   
                state.CreditsId && !spiner &&
                state.filmCredits.map((val:any,index:number)=>{
                    return <li key={index}>{val.title}</li>   
                })
            }

        </>    
    )
}
export default CastFilms