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
    type TgetGenres = {
        type: typeof ActionConst.GET_GENRES,
        payload:[]
    }
    
}