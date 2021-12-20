import React, { useEffect, useState } from "react";
import '../AddOwners.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { setOwners, getOwners ,updateowners } from '../reducers/action'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"




const AddOwners = (props) => {
    const { id } = useParams();
  
   

    useEffect(() => {

        if (window.location.pathname === `/update/${id}`) {
            setBtn('none')
            setfirstNameOwner(props.singleOwner.name_of_business_owner)
            setlastNameOwner(props.singleOwner.lastname_of_business_owner)
            setAddressOwner(props.singleOwner.address)
            setstartTimeOwner(props.singleOwner.activity_time)
            setEndTimeOwner(props.singleOwner.activity_time_end)
            setphoneOwnerOwner(props.singleOwner.phone)
            setdescriptionOwner(props.singleOwner.business_opening_sentence)
            setwebsiteOwner(props.singleOwner.address_home_page)
            setCategoryOwner(props.singleOwner.category_of_business_owner)
           
           
        } if (window.location.pathname === '/addOwners') {
            setBtn('block')
            setBtn2('none')
            {}
            
        }



    }, [props.singleOwner])


    ////////////////////////////////////////////////////// hooks single owner
    const [firstNameOwner, setfirstNameOwner] = useState("")
    const [lastNameOwner, setlastNameOwner] = useState("")
    const [addressOwner, setAddressOwner] = useState("")
    const [startTimeOwner, setstartTimeOwner] = useState("")
    const [endTimeOwner, setEndTimeOwner] = useState("")
    const [phoneOwner, setphoneOwnerOwner] = useState("")
    const [descriptionOwner, setdescriptionOwner] = useState("")
    const [websiteOwner, setwebsiteOwner] = useState("")
    const [categoryOwner, setCategoryOwner] = useState("")

    //////////////////////////////////////////////////////// other hooks
    const history = useNavigate();
    const [categories, setCategory] = useState('');
    const [btn , setBtn] = useState("")
    const [btn2 , setBtn2] = useState("")
    ////////////////////////////////////////////////////////////////////  update hooks
    const [updateFirstName , setUpdateFirstName] = useState('')
    const [updateLastName , setUpdateLastName] = useState('')
    const [updateAddress , setAddress] = useState('')
    const [updateStartTime , setStartTime] = useState('')
    const [updateEndTime , setEndTime] = useState('')
    const [updatePhone , setPhone] = useState('')
    const [updateText , setText] = useState('')
    const [updateWebsite , setUpdateWebsite] = useState('')
    const [updateCategory, setUpdateCategory] = useState('')
      
   
    
    const SetData = (e) => {
      
        
            e.preventDefault()
            
            const FirstName = e.target.firstName.value;
            const LastName = e.target.LastName.value;
            const address = e.target.address.value;
            const Starttime = e.target.Starttime.value;
            const Endtime = e.target.Endtime.value;
            const number = e.target.number.value;
            const sentence = e.target.sentence.value;
            const url = e.target.url.value;
            // const imgFile = e.target.imgFile.value;
            const select = categories;
            
            props.setdata({ FirstName, LastName, address, Starttime, Endtime, number, sentence, url, select })
            history("/");
        
        //   props.setdata(dataOfOwners)

    }

const updateOwner =()=>{
  const firstName = updateFirstName
  const lastName = updateLastName
  const address = updateAddress
  const startTime = updateStartTime
  const EndTime = updateEndTime
  const phone = updatePhone
  const text = updateText
  const website = updateWebsite
  const category = updateCategory
 
  const dataAll = {firstName,lastName,address ,startTime ,EndTime ,phone ,text ,website , category , id}
  
  
 props.updateowners(dataAll)
   
}


    return (
        <>

            <div  className="coverForm">

                {/* {props.singleOwner ? ():() } */}
                <form className="form"  onSubmit={SetData}>
                    <div className="titleAddOwners" >
                        <h1>Add Owners</h1>
                        <Link to="/">
                            <img src={logo} alt="logo pic" className="sizeLogoAddOwner" />
                        </Link>
                    </div>

                    <label>your first name of business</label>
                    <input defaultValue={firstNameOwner} onChange={(e)=>setUpdateFirstName(e.target.value)} type="text"  name="firstName" placeholder="First Name" />

                    <label>your last name of business</label>
                    <input defaultValue={lastNameOwner} onChange={(e)=>setUpdateLastName(e.target.value)} type="text" name="LastName" placeholder="Last Name" />

                    <label>address</label>
                    <input defaultValue={addressOwner} onChange={(e)=>setAddress(e.target.value)} type="text" name="address" placeholder="bar Ilan 2/42 , Herzeliya" />

                    <label>active time from:</label>
                    <input defaultValue={startTimeOwner} onChange={(e)=>setStartTime(e.target.value)} type="time" name="Starttime" />
                    <label>to</label>
                    <input defaultValue={endTimeOwner} onChange={(e)=>setEndTime(e.target.value)} type="time" name="Endtime" />

                    <label>your number phone</label>
                    <input defaultValue={phoneOwner} onChange={(e)=>setPhone(e.target.value)} type="number" name="number" placeholder="0523157725" />

                    <label>short sentence of your business</label>
                    <textarea defaultValue={descriptionOwner}  onChange={(e)=>setText(e.target.value)}  type="text" name="sentence" placeholder="Describe in a few sentences about the business , what service you give" />

                    <label>address home page</label>
                    <input defaultValue={websiteOwner} onChange={(e)=>setUpdateWebsite(e.target.value)} type="url" name="url" placeholder="https://example.com" />

                    <label>your category</label>
                    <select defaultValue={categoryOwner} onChange={(e) => {  ////    
                        const value1 = e.target.value
                        setCategory(value1)
                        setUpdateCategory(e.target.value)
                    }}>
                        <option value="Travel">Travel</option>
                        <option value="Help">Help</option>
                        <option value="Buy">Buy</option>
                        <option value="Hang out">Hang out</option>
                        <option value="Fix">Fix</option>
                        <option value="Food">Food</option>
                    </select>


                    <label>your image</label>
                    <input type="file" name="imgFile" />
                    
                    
                     <button   className="btnAddOwners" style={{display:btn}} >Add to Website</button>
                     
                </form>
                <button onClick={updateOwner} className="btnUpdateOwner" style={{display:btn2}} >update</button>
              
                
            </div>

        </>
    )



}


const mapStateToProps = (state) => {
    return {
        dataOwners: state.AllOwners
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setdata: (data) => dispatch(setOwners(data)),
        getOwners: () => dispatch(getOwners()),
        updateowners: (dataOwner) => dispatch(updateowners(dataOwner ))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AddOwners)