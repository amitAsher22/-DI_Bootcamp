import {SETOWNERS} from './types'

const initState = {
    AllOwners : {},

}

export const reducer = (state = initState, action={} ) => {
    switch(action.type){
        case SETOWNERS:
            return{...state , AllOwners:action.payload}
            default:
                return {...state }
    }
}