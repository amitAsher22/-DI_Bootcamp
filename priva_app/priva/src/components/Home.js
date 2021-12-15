import React  from "react";
import logo from '../images/logo.png'
import Categories from "./Categories";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { getOwners} from '../reducers/action'
import ShowAllOwners from "./ShowAllOwners";





const Home =()=>{
        return(
            <div>
            <div className="coverPic">
                <div className="header">
                <button className="btnRegister"> Login / LogOut</button>
                <img src={logo} alt="logo pic" className="sizeLogo"/>
                </div>
                <div className="mainInput">
                    <h1 className="titleH1">Everything around you</h1>
                    <input className="inputSearch" placeholder="Look for everything around you"/>
                </div>
            </div>
            <div className="coverOwners">
            <Link to="/addOwners">
                 <button className="btnOwners">Add Owners</button>
            </Link>
               
            </div>
            <div className="coverCategories">
                <Categories/>
            </div>
            <div>
                <ShowAllOwners />
            </div>
            </div>
        )
    
}



const mapStateToProps = (state) =>{
    return{
      dataOwners : state.getOwners
    } 
   }
    const mapDispatchToProps =(dispatch) =>{
        return{
           
            getOwners: ()=> dispatch(getOwners())
        }    
    }






export default connect(mapStateToProps,mapDispatchToProps)(Home)