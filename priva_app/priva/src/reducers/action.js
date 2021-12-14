import {OWNERS} from './types'

export const getOwners = (owners) => {
    return{
       type: OWNERS,
        payload: owners
    }
}

export const setOwners = (value)=> async (dispatch) =>{
    console.log("action value",value);
   try {
       const res = await fetch("http://localhost:8080/setOwners",{
           method:"post",
           headers:{"content-type":"application/json"},
           body:JSON.stringify(value)
       })
            const data = await res.json()
            dispatch({
                type:'SETOWNERS',
                payload:data
            })
   } 
   catch (error) {
       console.log(error);
   }

}