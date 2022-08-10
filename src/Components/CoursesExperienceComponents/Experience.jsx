import React from 'react';
import DataArray from '../../data/DataArray';
import Card from '../CardComponent/Card';
import './CourExpStyles.css'
const Experience=()=> {
    

    return ( 

       <div className="main-container">
       <div className="title-btn-container">
       <h1 className="container-title">Your Upcoming Experience</h1>
       <p>see all</p>
       </div>
       <div className="main-card-container">
       {
       DataArray.map((DataObj)=>{
        return <Card data={DataObj} key={DataObj.id}/>
       })
       } 
       </div>
       </div>

    );
}

export default Experience;