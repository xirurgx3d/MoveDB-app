import ActionConst from "../constants/constants"
import {ActionDetaisTypes} from "../@types/ActionsDetailsType"

const DetailFrilmRequest = (id:number):ActionDetaisTypes.TDetailFrilmRequest => ({
    type:ActionConst.GET_DETAILFILM_REQUEST,
    payload:id
})
const DetailFrilmResult = (data:object):ActionDetaisTypes.TDetailFrilmResult => ({
    type:ActionConst.DETAILFILM_RESULT,
    payload:data
})

export {
    DetailFrilmRequest,
    DetailFrilmResult
}