import React from "react";

class Card extends React.Component{
    
render(){
    const {user} = this.props
    const {name , email , username} =user
 
    return(
        <>
       <div>
          <h1> this is my name : {name} </h1> 
          <p> this is my name : {email} </p> 
          <p>the user name is : {username}</p>
        
       </div>
       </>
    )
}


}

export default Card