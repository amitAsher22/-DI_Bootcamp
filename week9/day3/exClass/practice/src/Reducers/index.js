



const initState = {
  listRobots : [],
}


export const reducer = (state = initState , action)=>{
  switch (action.type) {
      case 'USERS':
          return {...state , listRobots: action.payload}
  
      default:
        return {...state}
  }
    
}