import React  from "react";
import logo from '../images/logo.png'
import Categories from "./Categories";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { getOwners} from '../reducers/action'
import ShowAllOwners from "./ShowAllOwners";
import { useState } from "react";
import {GoogleLogin , Googleogout} from 'react-google-login'




// const   responseGoogle = response =>{
//     console.log(response);
//     setShowLoginButton(false)
//     setShowLogoutButton(true)
// }

// const onSignoutSuccess = ()=>{
//     alert('you have been signed out successFully')
//    setShowLoginButton(true)
//     setShowLogoutButton(false)
// }


const Home =()=>{
    const [search , setSearch] = useState("")
    const [showLoginButton , setShowLoginButton] = useState(true) 
    const [showLogoutButton , setShowLogoutButton] = useState(false) 
    const  responseGoogle = (response )=>{
        console.log(response);
        setShowLoginButton(false)
        setShowLogoutButton(true)
    }
    
    const onSignoutSuccess = ()=>{
        alert('you have been signed out successFully')
       setShowLoginButton(true)
       setShowLogoutButton(false)
    }
    

        return(
       
            <div>
            <div className="coverPic">
                <div className="header">
                {showLoginButton ?
                <GoogleLogin 
                    clientId="779329735420-d9rshfee9j5bk5gjj12gref0ejagsjg0.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    buttonText="Login with google"

                /> 
                : null
                }
                {showLogoutButton ? 
                <Googleogout
                    clientId="779329735420-d9rshfee9j5bk5gjj12gref0ejagsjg0.apps.googleusercontent.com"
                    buttonText="LoginOut"
                    onSuccess={onSignoutSuccess}
                /> 
                : null 
                }
              
                <img src={logo} alt="logo pic" className="sizeLogo"/>
                </div>
                <div className="mainInput">
                    <h1 className="titleH1">Everything around you </h1>
                    <input onChange={(e)=>{setSearch(e.target.value)}} className="inputSearch" placeholder="Look for everything around you"/>
                </div>
            </div>
            <div className="coverOwners">
            <Link to="/addOwners">
                 <button className="btnOwners">Add Owners </button>
            </Link>
               
            </div>
            <div className="coverCategories">
                <Categories />
            </div>
            <div>
                <ShowAllOwners search={search} />
            </div>
            </div>
        )
    
}



const mapStateToProps = (state) =>{
    return{
    //   dataOwners : state.getOwners
    } 
   }
    const mapDispatchToProps =(dispatch) =>{
        return{
           
            getOwners: ()=> dispatch(getOwners())
        }    
    }






export default connect(mapStateToProps,mapDispatchToProps)(Home)