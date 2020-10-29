import Filmlist from "./Filmlist";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getDiscoverRequest} from "../../../../redux/reducers/reduceFilm/action/actions";
import {Iredusers} from "../../../../redux/reducers/rootReducer"
import {TinitialStateParams} from "../../../../redux/reducers/reduceFilm/reducer"
import { createSelector } from "reselect";
/*
    @Iredusers из  rootReducer, в ключает в себя типы из redusers
    @TinitialStateParams типы параметров из TinitialState.params (страницы,жанры, фильтр)
*/

const selectDiscover = createSelector(
    state => state.films.DISCOVER,
    todos => {
        //console.log(todos)
        return todos
    }
  )

const mapStateToProps = (state:Iredusers) => ({
    //discover:state.films.DISCOVER,
    discover:selectDiscover(state),
    params:state.films.params
})
// выводим типы, так как мы сами их и описывает
// без описания интерфейса
export type TstateProp = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(Filmlist)