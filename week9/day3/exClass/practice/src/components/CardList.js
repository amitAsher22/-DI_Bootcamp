import React from "react";
import Card from './Card'

 
class CardList extends React.Component{

    render(){
     const {robots} = this.props
   
        return(
            <>
           {
               robots.map((user , i) =>{
                   return <Card user ={user}  key={i}/>
               })
           }
            </>
        )
          
            
        
    }


}

export default CardList