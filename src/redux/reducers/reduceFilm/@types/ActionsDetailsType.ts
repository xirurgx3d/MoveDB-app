import ActionConst from "../constants/constants"
export declare namespace ActionDetaisTypes {
    type TDetailFrilmRequest = {
        type: typeof ActionConst.GET_DETAILFILM_REQUEST
        payload:number
    }
    type TDetailFrilmResult = {
        type: typeof ActionConst.DETAILFILM_RESULT
        payload:object
    }
    
}