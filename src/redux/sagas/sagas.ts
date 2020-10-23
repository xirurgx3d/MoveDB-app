import { all } from "redux-saga/effects";
import {watchFilms} from "../reducers/reduceFilm/sagas/sagas";


export default function* rootSaga(){
    yield all([
        watchFilms(),
      ]);
    
}
