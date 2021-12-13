import React, { useState } from "react";
import '../AddOwners.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'



const AddOwners = () => {

const GetData = (e) =>{
    e.preventDefault()
    const FirstName = e.target.firstName.value;
    const LastName = e.target.LastName.value;
    const address = e.target.address.value;
    const Starttime = e.target.Starttime.value;
    const Endtime = e.target.Endtime.value;
    const number = e.target.number.value;
    const sentence = e.target.sentence.value;
    const url = e.target.url.value;
    const imgFile = e.target.imgFile.value;
    const select = categories;
    

}


    const [categories, setCategory] = useState('');
    return (
        <>

            <div  onSubmit={GetData}   className="coverForm">

                <form  className="form" >
                    <div className="titleAddOwners" >
                        <h1>Add Owners</h1>
                        <Link to="/">
                            <img src={logo} alt="logo pic" className="sizeLogoAddOwner" />
                        </Link>
                    </div>

                    <label>your first name of business</label>
                    <input type="text" name="firstName"  placeholder="First Name" />

                    <label>your last name of business</label>
                    <input type="text" name="LastName" placeholder="Last Name" />

                    <label>address</label>
                    <input type="text" name="address" placeholder="bar Ilan 2/42" />

                    <label>active time from:</label>
                    <input type="time" name="Starttime" />
                    <label>to</label>
                    <input type="time" name="Endtime" />

                    <label>your number phone</label>
                    <input type="number" name="number" placeholder="0523157725" />

                    <label>short sentence of your business</label>
                    <textarea type="text" name="sentence" placeholder="Describe in a few sentences about the business , what service you give" />

                    <label>address home page</label>
                    <input type="url" name="url"  placeholder="https://example.com" />

                    <label>your category</label>
                    <select onChange={(e) => {
                        const value1 = e.target.value
                        setCategory(value1)
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

                    <button className="btnAddOwners">Add to Website</button>

                </form>
            </div>



        </>
    )



}

export default AddOwners