import React, { Component } from 'react'

import Mealphotoslist from './Mealphotoslist'

export class Mealphotos extends Component {
 
  constructor() {
    super();
    this.state = {
      meals: [],
      page:1
    }
  }
  async componentDidMount() {
     let url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({meals:parseData.meals , toltalArticles:parseData.toltalResults})
  }
  render() {
    return (
      <div className='container mt-3'>
        <h2 style={{textAlign:"center"}}>Meals Grid</h2>
        <div className='row ' style={{alignItems :"center"}}>
          {this.state.meals.map((element,i) => (

             <div className='col-md-4'key={element.idMeal} >
              <Mealphotoslist  title={element.strMeal}  imageurl={element.strMealThumb} />
            </div>
          )
          )}
        </div>
       





      </div>
    )
  }
}

export default Mealphotos