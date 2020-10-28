import { all } from "redux-saga/effects";
import {watchFilms,DetailFilms,FilmsMore} from "../reducers/reduceFilm/sagas/sagas";


export default function* rootSaga(){
    yield all([
        watchFilms(),
        DetailFilms(),
        FilmsMore()
      ]);
    
}
