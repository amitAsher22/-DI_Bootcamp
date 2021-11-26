import React from "react"

// import Message from "./Message"


// class Shoot extends React.Component {

//     msg = ()=>{
//         alert('Great Shot!')
//      }

//      shootRegularWithParameter(){
//          alert('Goal')
//      }



    
    
//   render(){
//     return(
//         <>
//        <Message alert={this.msg}/>
       
//        <button onClick={this.msg}>Shooting</button>
//        <button onClick={()=>this.shootRegularWithParameter() }> text Shooting!</button>
//         </>
//     )
//  }


  
// }

class shootTwo extends React.Component {
   
   shootTwo(){
   alert(this)
   
   }

   render(){
    return(

        <>
        <button onClick={()=> this.shootTwo(this)}>Keep Shooting! - ex5</button>
        </>
    )
       
    
   }
   
}


export default shootTwo