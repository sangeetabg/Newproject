import React, { Component } from 'react'


 class Resourceslist extends Component {
     
    


   render() {
    let { title, description ,imageurl} = this.props;
       return (
        <div className='my-4'>
            <div className="card" style={{width :"20rem" ,alignItems:"center"}}>
            
                <div className="card-body">
                    <h5 className="card-title" style={{color :"#EF6119"}}>{title}</h5>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    
                    <p className="card-text">{ description}</p>
                    
                </div>
            </div>
        </div>
    )
  }
}

export default Resourceslist