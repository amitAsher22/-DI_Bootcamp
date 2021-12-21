import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../showAllOwnersStyle.css';
import {FaStreetView} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiCategory} from 'react-icons/bi'
import {GoClock} from 'react-icons/go'
import {MdFilePresent} from 'react-icons/md'
import {FcVoicePresentation} from 'react-icons/fc'





const ShowAllOwners = (props) => {
  
 
    const [owners, setOwners] = useState([]);
    const [owners2, setOwners2] = useState([]);

    useEffect( () => {
      fetch("http://localhost:8080/allowners")
         .then(res => res.json())
         .then(data => {
           console.log(data);
         
             setOwners(data)
             setOwners2(data)
           
          
         })

 }, [])

   
    useEffect( () => {
         
              if(props.search.trim().length >= 3){
                  const filterAll =  owners2.filter(item => {
                        return item.name_of_business_owner.toLowerCase().includes(props.search.toLowerCase())
                   })
                   setOwners(filterAll)  
                  
              }
              else {
                setOwners(owners2)
              }
             
         

    }, [props.search])


  
    return (

        <div >
          <div className="coverDiv" >
          {owners.length ? (
            owners.map(owner => 
                <div className="divOwner" key={owner.owner_id} >
                <Link to={'Owner/'+ owner.owner_id}>
                <p className="titleName"> {owner.name_of_business_owner} {owner.lastname_of_business_owner}</p> 
                <FcVoicePresentation/> <span className="sentence"> "{owner.business_opening_sentence}"</span> 
                <div className="lower_container">
                <p><FaStreetView/> {owner.address}</p> 
                <p><BsFillTelephoneFill/> {owner.phone}</p> 
                <p><BiCategory/> {owner.category_of_business_owner}</p> 
                <p><GoClock/> {owner.activity_time} to  {owner.activity_time_end}</p> 
                <p><MdFilePresent/> {owner.address_home_page}</p> 
                </div>
                </Link>
                </div>
                
                )  
          ):<div>wait for card....create loder</div>}
            
          </div>
          
        </div>
       
    )
}



export default ShowAllOwners