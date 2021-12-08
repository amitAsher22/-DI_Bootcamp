import React from "react";
import {connect} from 'react-redux';
import {showData} from '../actions/TransactionActions'


class TransactionForm extends React.Component {
   
    constructor(){
        super()
        this.state = { 
            accountNumber : '',
            FSC:'',
            name:'',
            amount:'',
           
        }
    }

   
    render() {
        return (
            <>
                <form onSubmit={this.handlerSubmit}>
                    <input type="text" name="accountNumber" placeholder="accountNumber" value={this.state.accountNumber} onChange={this.handleaccountNumberChange}  />
                    <input type="text" name="FSC" placeholder="FSC" value={this.state.FSC} onChange={this.handleFSCChange} />
                    <input type="text" name="name   " placeholder="name" value={this.state.name} onChange={this.handlenameChange}  />
                    <input type="text" name="amount "   placeholder="amount" value={this.state.amount} onChange={this.handleamountChange} />
                    
                    <button onClick={this.getData} >submit</button>
                   
                </form>
            </>
        )
    }

    handlerSubmit = (event) =>{
        event.preventDefault()
      }

      handleaccountNumberChange = (event)=>{
         this.setState({accountNumber:event.target.value}) 
      }

      handleFSCChange = (event)=>{
        this.setState({FSC:event.target.value}) 
     }

     handlenameChange = (event)=>{
        this.setState({name:event.target.value}) 
     }
     
     handleamountChange = (event)=>{
        this.setState({amount:event.target.value}) 
     }

     getData = ()=>{
         console.log(this.state);
     }

}

 
const mapStateToProps = (state)=>{
    return{
        accountNumber : state.accountNumber 
    }
    
}

const MapDispatchToProps = (dispatch)=>{
    return{
        getDate : (data)=> dispatch(showData(data))
    }

}

export default connect(mapStateToProps ,MapDispatchToProps )(TransactionForm)