import React, { Component } from 'react'

import Resourceslist from './Resourceslist';

export class Resources extends Component {
 
  constructor() {
    super();
    this.state = {
      meals: [],
      page:1
    }
  }
  async componentDidMount() {
     let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({meals:parseData.meals})
  }
  render() {
    return (
      <div className='container mt-3'>
        <h2 style={{ textAlign:"center"}}>Top Meals</h2>
        <div className='row ' style={{alignItems :"center"}}>
          {this.state.meals.map((element,i) => (

             <div className='col-md-6'key={element.idMeal}  style={{alignItems :"center"}}>
              <Resourceslist  title={element.strMeal} description={element.strInstructions ? element.strInstructions.slice(0, 200) : ""} newurl={element.strSource} area={element.strArea} cat={element.strCategory} />
            </div>
          )
          )}
        </div>
       





      </div>
    )
  }
}

export default Resources

