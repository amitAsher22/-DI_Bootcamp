import React from "react";
import food from '../images/food.png'
import fix from '../images/fix.png'
import out from '../images/out.png'
import buy from '../images/buy.png'
import travel from '../images/travel.png'
import help from '../images/help.png'

class Categories extends React.Component{

render(){
    return(
        <>
          <div className="CategoriesSection">
              <ul>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={food}/>
                      <a href="#"/><span>Food</span>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={fix}/>
                      <a href="#"/><span>Fix</span>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={out}/>
                      <a href="#"/><span>Hang out</span>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={buy}/>
                      <a href="#"/><span>Buy</span>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={travel}/>
                      <a href="#"/><span>Travel</span>
                  </div>
                  </li>
                  <li>
                  <div className="divCategories">
                      <img className="imgCategories" src={help}/>
                      <a href="#"/><span>Help</span>
                  </div>
                  </li>
              </ul>
          </div>
        </>
    )
}

}

export default Categories