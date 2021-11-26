import React from "react";

class Message extends React.Component{
    constructor(props) {
        super(props);
        this.state = {message: props.alert};
      }

    render(){
        const {message} = this.state
        return(
            <>
             <button onClick={message}>click here  </button>
            </>
        )

    }
  
    }
export default Message