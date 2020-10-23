import { put, call, takeEvery } from "redux-saga/effects";
import Api from "../../../../api/Api";
import {ActionTypes} from "../@types/ActionsType"
import { DiscoverResult,getGenres } from "../action/actions";
import ActionConst from "../constants/constants"

// получение всех компонентов главной страницы
function* FilmsRequestSaga({payload}:any){
    try {
        const res  =  typeof payload === 'object' ?  
            yield call(Api.getFilms, payload) :
            yield call(Api.getFilms)
            
        const generes = yield call(Api.AllgetGenres)
        //const move = yield call(Api.getMove)
        //console.log(move)
        yield put(DiscoverResult(res.data.results))
        yield put(getGenres(generes.data.genres))
    } catch (error) {
        yield new Error(error)
    }
}




function* watchFilms(){
    yield takeEvery(ActionConst.GET_DISCOVER_REQUEST,FilmsRequestSaga)
}



export {watchFilms}