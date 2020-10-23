import {reducer as reduceFilm, TinitialState as TinitialStateFilms} from './reduceFilm/reducer'
import { combineReducers } from "redux";

export interface Iredusers {
    films:TinitialStateFilms
}

export default combineReducers({
    films:reduceFilm
})