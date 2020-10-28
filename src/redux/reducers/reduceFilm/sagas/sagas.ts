import { put, call, takeEvery } from "redux-saga/effects";
import Api from "../../../../api/Api";
import {ActionTypes} from "../@types/ActionsType"
import { DiscoverResult,DiscoverMoreResult } from "../action/actions";
import { DetailFrilmResult } from "../action/actionsDetails";
import ActionConst from "../constants/constants"

// получение всех компонентов главной страницы
function* FilmsRequestSaga({payload}:any){
    try {
        const res  =  typeof payload === 'object' ?  
            yield call(Api.getFilms, payload) :
            yield call(Api.getFilms)
        yield put(DiscoverResult(res.data.results))
    } catch (error) {
        yield new Error(error)
    }
}
function* FilmsMoreRequestSaga({payload}:any){
    try {
        const res = yield call(Api.getFilms, payload)
        yield put(DiscoverMoreResult(res.data.results))
    } catch (error) {
        yield new Error(error)
    }
}
// детали фильма
function* DetailFilmsRequestSaga({payload:{id}} :any) {
    
    try {
        const res = yield call(Api.getMove, id)
        const act = yield call(Api.getCredits, id)
        yield put(DetailFrilmResult(Object.assign(res.data,act.data)))
    } catch (error) {
        yield new Error(error)
    }
}


function* watchFilms(){
    yield takeEvery(ActionConst.GET_DISCOVER_REQUEST,FilmsRequestSaga)
}
function* DetailFilms(){
    yield takeEvery(ActionConst.GET_DETAILFILM_REQUEST,DetailFilmsRequestSaga)
}
function* FilmsMore(){
    yield takeEvery(ActionConst.GET_DISCOVER_MORE_REQUEST,FilmsMoreRequestSaga)
}


export {watchFilms,DetailFilms,FilmsMore}