
const list = {
    accountNumber : '',
    FSC:'',
    name:'',
    amount:'',
    listArray : []


}

export const reducer = (state = list , action = {}) =>{
    switch (action.type) {
        case 'INSERT':
            return {...state , listArray: action.payload}
        case 'UPDATE' :
            return {...state , list : action.payload}  
        case 'DELETE' :
            return {...state , list : action.payload} 
        case 'UPDATE-INDEX':
            return {...state , list : action.payload}       
        default:
            return {...state}
    }
}