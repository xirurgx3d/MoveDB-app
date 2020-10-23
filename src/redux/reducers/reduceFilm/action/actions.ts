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
// по странично фильмы
const DiscoverMore = (page:any):ActionTypes.TDiscoverMore => ({
    type:ActionConst.DISCOVER_MORE,
    payload:page
})
// все жанры фильмов
const getGenres = (geners:[]):ActionTypes.TgetGenres => ({
    type:ActionConst.GET_GENRES,
    payload:geners
})
// получение фильмов по жанру
const DiscoverGenres = (params:any):ActionTypes.TDiscoverGenres => ({
    type:ActionConst.DISCOVER_GENRES,
    payload:params
})
// сотировка фильмов
const DiscoverSort = (params:any):ActionTypes.TDiscoverSort => ({
    type:ActionConst.DISCOVER_SORT,
    payload:params
})

export {
    getDiscoverRequest,
    DiscoverResult,
    DiscoverMore,
    getGenres,
    DiscoverGenres,
    DiscoverSort
}