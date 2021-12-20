import React, { Component } from 'react'
 class Resourceslist extends Component {
  
   render() {
    let { title} = this.props;
       return (
        <div className='my-4'>
            <table>
                <thead>
                <th>Name</th>
                </thead>
                <tbody>

                    <tr>
                        <td>{title}</td>
                        </tr>
                </tbody>
                
            </table>
        </div>
    )
  }
}

export default Resourceslist