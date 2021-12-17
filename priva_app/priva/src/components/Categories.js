import React from "react";
import food from '../images/food.png'
import fix from '../images/fix.png'
import out from '../images/out.png'
import buy from '../images/buy.png'
import travel from '../images/travel.png'
import help from '../images/help.png'
import { Link } from "react-router-dom";


class Categories extends React.Component{

render(){
    return(
        <>
          <div className="CategoriesSection">
              <ul>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={food} alt="food_img"/>
                      <Link to={"/"}><span>food</span></Link>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={fix} alt="fix_img"/>
                      <Link to={"/"}><span>fix</span></Link>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={out} alt="out_img"/>
                      <Link to={"/"}><span>out</span></Link>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={buy} alt="buy_img" />
                      <Link to={"/"}><span>buy</span></Link>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={travel} alt="travel_img"/>
                      <Link to={"/"}><span>travel</span></Link>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={help} alt="help_img"/>
                      <Link to={"/"}><span>help</span></Link>
                  </div>
                  </li>
              </ul>
          </div>
        </>
    )
}

}

export default Categories