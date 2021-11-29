
import {connect} from 'react-redux';

const Helper = (props)=>{
  


    return(
        <>
        <div>
           change property one <input onChange={handler}  type="text"/>
        </div>
        <div>
          <button >click</button>
        </div>
        <h1>{props.property1}</h1>
        <h1>{props.property2}</h1>
      
        </>
    )

}

const mapStateToProps = (state)=>{
  console.log(state)
 return {
property1: state.property_one,
property2: state.property_two,

  
 
 } 
}



export default connect(mapStateToProps )(Helper)