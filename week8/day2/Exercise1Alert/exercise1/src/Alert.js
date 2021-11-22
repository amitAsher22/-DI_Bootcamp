
import React from "react";

// const Alert = (props)=>{
//     return(
//         <>
//         <div class="alert alert-danger" role="alert">
//           {props.text}
//           </div>
//         </>
//     )
// }

// class Alert extends React.Component {
   
//     render() {   
       
//         return (
            
//             <>
            
//                <div class="alert alert-danger d-lg-block " role="alert" >
//                   {this.props.text}
                
//                 </div>
//             </>
//         ) 
        
//     }
// }


//////////////////////////////////////////////////// Exercise 2: Conditional Rendering

// const Alert = (props)=>{
//     const bool = props.show
//     if(bool){
//         return(
//             <>
//             <div class="alert alert-danger " role="alert">
//               {props.text}
//               </div>
//             </>
//         )
//     }else{
//         return(
//             <>
//             <div class="alert alert-danger d-lg-none" role="alert">
//               {props.text}
//               </div>
//             </>
//         )
//     }
 
// }
////////////////////////////////////////////////////////////////// Exercise 3: Smart Alert

const Alert = (props)=>{
    const color =props.color
    if(color === 'Red'){
        return(
     
            <>
                 <div class="alert alert-danger" role="alert">
                 This is a primary alert—check it out!
                </div>

            </>
        )

        
    } else if (color === 'orange'){
        return(
                        <>
                         <div class="alert alert-warning" role="alert">
                          This is a primary alert—check it out!
                          </div>
                        </>
                    )
    }else if (color === 'green'){
        return(
                        <>
                         <div class="alert alert-success" role="alert">
                          This is a primary alert—check it out!
                          </div>
                        </>
                    )
    }else{
        alert(`the color is ${color} is not in the list`)
    }

}


export default Alert