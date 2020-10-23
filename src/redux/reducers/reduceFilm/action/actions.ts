import ActionConst from "../constants/constants"
import {ActionTypes} from "../@types/ActionsType"

// инициализурем получение фильмов в сагу
const getDiscoverRequest = (params?:any):ActionTypes.TDiscoverRequest => ({
    type:ActionConst.GET_DISCOVER_REQUEST,
    payload:params
})
// получаем массив фильмов
const DiscoverResult = (result:[]):ActionTypes.TDiscoverResult => ({
    type:ActionConst.DISCOVER_RESULT,
    payload:result
})

// все жанры фильмов
const getGenres = (geners:[]):ActionTypes.TgetGenres => ({
    type:ActionConst.GET_GENRES,
    payload:geners
})


export {
    getDiscoverRequest,
    DiscoverResult,
    getGenres,
}