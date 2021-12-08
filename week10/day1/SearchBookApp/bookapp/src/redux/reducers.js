import { BOOKS } from './types';

const initState = {
    books: []
}

export const reducer = (state = initState, actions = {}) => {
    
    switch (actions.type) {
        case BOOKS: return { ...state, books: actions.payload }
        default: return { ...state }
    }
}