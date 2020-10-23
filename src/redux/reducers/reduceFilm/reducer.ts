import ActionType from "./constants/constants"

const initialState = {
    DISCOVER:[],
    genres:[],
    params:{
        page:1,
        with_genres:null as number | null,
        sort_by:null as string | null
    }
}
export type TinitialState = typeof initialState
export type TinitialStateParams = typeof initialState.params
type Taction = {
    type:string,
    payload?:any
}

const reducer = (state:TinitialState = initialState, action:Taction):TinitialState => { 
    const setSate = SetState(state)

    switch (action.type) {
        case ActionType.GET_DISCOVER_REQUEST :
            return typeof action.payload === 'object' ?  
            {...state,params:{...action.payload}} :
            state
        case ActionType.DISCOVER_RESULT :
            return setSate('DISCOVER',action.payload)
        case ActionType.GET_GENRES :
            return setSate('genres',action.payload)
        default: return state
    }
}

export {reducer}

const SetState = (state:TinitialState) => (key:string,data:any) =>{
    return {...state,[key]: data}
}