/*
    если количество зависемостей выростить то можно разбить на под файлы
*/

//константы
export const constDetail = {
    CastFilmLoad:'CastFilmLoad',
    CastFilmResult:'CastFilmResult',
    RecomendFilmResult:'RecomendFilmResult'
}
// начальное состояние
export const initialStateDetail = {
    CreditsId:null,
    filmCredits:[],
    RecomendFilm:[]
}
type TinitialState = typeof initialStateDetail

// экщины и его интерфейс
interface IActionsDetail{
    CastFilmResult(data:object):{
        type:typeof constDetail.CastFilmResult,
        payload:object
    }
    RecomendFilmResult(data:[]):{
        type:typeof constDetail.RecomendFilmResult,
        payload:[]
    }
}
export const ActionsDetail:IActionsDetail = class{ 
    static CastFilmResult(data:object){
        return{
            type:constDetail.CastFilmResult,
            payload:data
        }
    }
    static RecomendFilmResult(data:[]){
        return {
            type:constDetail.RecomendFilmResult,
            payload:data
        }
    }
}
// редьюсер
export default function reducerDetail(state:TinitialState, action:any) {
    switch (action.type) {
      case constDetail.CastFilmResult:
        const {result,catid} = action.payload
        return {...state,
            filmCredits:result,
            CreditsId:catid
        }
      case constDetail.RecomendFilmResult:  
        return {...state,RecomendFilm:action.payload}
      default:
        return state
    }
}