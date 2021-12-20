import React, { Component } from 'react'
// import List from './List'

class Itemlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: [],
        }
    }
    async componentDidMount() {
        let url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ meals: parseData.meals })
    }

    //  
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        <table>
                                    <thead>
                                         
                                        <th>Name</th>
                                    </thead>
                                    
                            {this.state.meals.map((element, i) => (
                                <tbody>
                                
                                    

                                        <tr>
                                    
                                            <td>{element.strCategory}</td>
                                        </tr>
                                    </tbody>

                                


                            )
                            )}
                            </table>

                        </div></div></div>
            </>
        )
    }
}

export default Itemlist
