import ActionConst from "../constants/constants"
import {TinitialStateParams} from "../reducer"

export declare namespace ActionTypes {
    type TDiscoverRequest = {
        type: typeof ActionConst.GET_DISCOVER_REQUEST
        payload?:TinitialStateParams
    }
    type TDiscoverResult = {
        type: typeof ActionConst.DISCOVER_RESULT,
        payload:[]
    }
    type TDiscoverMore = {
        type: typeof ActionConst.DISCOVER_MORE,
        payload:any
    }
    type TDiscoverGenres = {
        type: typeof ActionConst.DISCOVER_GENRES,
        payload:TinitialStateParams
    }
    type TDiscoverSort = {
        type: typeof ActionConst.DISCOVER_GENRES,
        payload:TinitialStateParams
    }
    type TgetGenres = {
        type: typeof ActionConst.GET_GENRES,
        payload:[]
    }
    type TgetMovesParam = {
        type: typeof ActionConst.GET_MOVES,
        payload:any
    }
}