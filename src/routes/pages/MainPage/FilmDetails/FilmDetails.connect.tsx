import FilmDetails from "./FilmDetails";
import { connect } from "react-redux";
import { DetailFrilmRequest} from "../../../../redux/reducers/reduceFilm/action/actionsDetails";
import {Iredusers} from "../../../../redux/reducers/rootReducer"
import {TinitialStateParams} from "../../../../redux/reducers/reduceFilm/reducer"
/*
    @Iredusers из  rootReducer, в ключает в себя типы из redusers
    @TinitialStateParams типы параметров из TinitialState.params (страницы,жанры, фильтр)
*/

const mapStateToProps = (state:Iredusers) => ({
    detailsFilme:state.films.detailFilm,
})
// выводим типы, так как мы сами их и описывает
// без описания интерфейса
export type TstateProp = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = (dispatch:Function) => ({
    loadFilmDetails:(id:number) => dispatch(DetailFrilmRequest(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(FilmDetails)