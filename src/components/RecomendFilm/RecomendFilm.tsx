import React, { useEffect, useReducer } from 'react';
import Api from '../../api/Api'
import reducerDetail from '../../redux/reducers/FilmDetailsRedux';
import {initialStateDetail,ActionsDetail} from '../../redux/reducers/FilmDetailsRedux';

interface IRecomendFilm {
    Detailid: any
}
const RecomendFilm:React.FC<IRecomendFilm> = (props) =>{
    const {id} = props.Detailid
    const [state, dispatch] = useReducer(reducerDetail, initialStateDetail);
    
    const getRecomendFilm = async () => {
        const result = await Api.getRecommendations(id)
        dispatch(ActionsDetail.RecomendFilmResult(result.data.results.slice(1, 7)))
    }
    useEffect( () => {
        getRecomendFilm()
    }, [id])

    //console.log('render rec')

    return (
        <>
            <h2>Рекомендации</h2>
            <ul>
                {
                    state.RecomendFilm.map((val:any,index:number)=>{
                        return <li key={index}>{val.title}</li>
                    })
                }
            </ul>
        </>
    )
}
export default RecomendFilm