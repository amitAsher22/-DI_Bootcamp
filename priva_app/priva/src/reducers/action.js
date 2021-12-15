// import {OWNERS} from './types'



export const getOwners = (owners) => async(dispatch) =>{
    try {
        const res = await fetch("http://localhost:8080/allowners",{
            method:"get",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(owners)
        })
        const data = await res.json()
        dispatch({
            type:'GETOWNERS',
            payload:data
        })
        
    } 
    catch (error) {
        console.log(error);
        
    }
    // return{
    //    type: OWNERS,
    //     payload: owners
    // }
}



export const setOwners = (value)=> async (dispatch) =>{
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