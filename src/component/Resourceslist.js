import React, { Component } from 'react'
 class Resourceslist extends Component {
  
   render() {
    let { title, description ,newurl,cat,area} = this.props;
       return (
        <div className='my-4'>
            <div className="card" style={{width :"30rem" ,alignItems:"center"}}>
            
                <div className="card-body">
                    <h5 className="card-title" style={{color :"#EF6119"}}>{title}</h5>
                    <p className="card-text">Category :{cat}</p>
                    <p className="card-text">From :{area}</p>
                    <p className="card-text">{ description}</p>
                    <a rel='noreferrer' href={newurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default Resourceslist
