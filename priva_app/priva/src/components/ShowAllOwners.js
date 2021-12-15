import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../showAllOwnersStyle.css'




const ShowAllOwners = () => {

    const [owners, setOwners] = useState("");

    useEffect(  () => {
         fetch("http://localhost:8080/allowners")
            .then(res => res.json())
            .then(data => setOwners(data))

    }, [])




    return (

        <div >
          <div className="coverDiv" >
          {owners.length ? (
            owners.map(owner => 
                <div className="divOwner" key={owner.owner_id} >
                <Link to={'Owner/'+ owner.owner_id}>
                <p>full name : {owner.name_of_business_owner}{owner.lastname_of_business_owner}</p> 
                <p>address: {owner.address}</p> 
                <p>phone: {owner.phone}</p> 
                <p>your category: {owner.category_of_business_owner}</p> 
                <p>open: {owner.activity_time}</p> 
                <p>close: {owner.activity_time_end}</p> 
                <p>address home page : {owner.address_home_page}</p> 
                <span>close: {owner.business_opening_sentence}</span> 
                </Link>
                </div>
                
                )  
          ):<div>wait for card....create loder</div>}
            
          </div>
         
        </div>
    )
}



export default ShowAllOwners