import Filmlist from "./Filmlist";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getDiscoverRequest,DiscoverMore,DiscoverGenres,DiscoverSort } from "../../../../redux/reducers/reduceFilm/action/actions";
import {Iredusers} from "../../../../redux/reducers/rootReducer"
import {TinitialStateParams} from "../../../../redux/reducers/reduceFilm/reducer"
/*
    @Iredusers из  rootReducer, в ключает в себя типы из redusers
    @TinitialStateParams типы параметров из TinitialState.params (страницы,жанры, фильтр)
*/

const mapStateToProps = (state:Iredusers) => ({
    discover:state.films.DISCOVER,
    genres:state.films.genres,
    params:state.films.params
})
// выводим типы, так как мы сами их и описывает
// без описания интерфейса
export type TstateProp = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = (dispatch:Function) => ({
    loadDiscover:(params?:TinitialStateParams) => dispatch(getDiscoverRequest(params))
})

export default connect(mapStateToProps,mapDispatchToProps)(Filmlist)