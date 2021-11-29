import {connect} from 'react-redux';

const view = (props)=>{
    return(
        <>
        <div>
            show property one  : {props.property1}
        </div>
        <div>
            show property two : {props.property2}
        </div>
        </>
    )

}

const mapStateToProps = (state)=>{
    return {
        property1 : state.property_one,
        property2 : state.property_two,
    }
 }


export default connect(mapStateToProps)(view)