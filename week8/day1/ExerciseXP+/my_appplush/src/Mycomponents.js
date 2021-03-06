import React from "react" ;
import logo from './logo.svg';


const mystyle = 
{
    color: 'white',
    background : 'DodgerBlue',
    padding : '10px',
    fontfamily: 'Arial'
}

const mySuperStyles = 
{
    color :'yellow',
    fontSize : '16px',
    fontWeight : 'bold',
    border : '1px solid yellow',
    backgroundColor : 'black',
    padding : '5px',
    borderRadius:'8px',
    margin : '10px'
}


const Mycomponents = ()=>{
    return(
         <div className="center">
         <h1 className="red">this is Header</h1>
        <p style = {mystyle}>this is a Paragraph</p>
         <a href="/">this is a link</a>
         <h2>this is a form</h2>
         <form>
             <label>Enter your name:</label>
             <input type="text" /> <button style = {mySuperStyles}>submit</button>
         </form>
         <h2>Here is an image:</h2>
         <img src={logo} width="100" height="50" alt="img" />
         <h3>this is a List:</h3>
         <ul>
             <li>Coffee</li>
             <li>tea</li>
             <li>milk</li>
         </ul>
        </div>
    )
        
}

export default Mycomponents