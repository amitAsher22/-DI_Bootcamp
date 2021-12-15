import {SETOWNERS ,GETOWNERS} from './types'

const initState = {
    AllOwners : {},
    getOwners : {},

}

export const reducer = (state = initState, action={} ) => {
    switch(action.type){
        case SETOWNERS:
            return{...state , AllOwners:action.payload}
            case GETOWNERS:
                return{...state , getOwners:action.payload}
            default:
                return {...state }
    }
}