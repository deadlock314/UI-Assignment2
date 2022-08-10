import React from 'react';
import DataArray from '../../data/DataArray';
import Card from '../CardComponent/Card';
import './CourExpStyles.css';
const Courses=()=> {


    return ( 

   

       <div className="main-container">
       <div className="title-btn-container">
       <h2 className="container-title">Your Upcoming classes of courses</h2>
       <p>see all</p>
       </div>
       <div className="main-card-container">
       {
       DataArray.map((DataObj)=>{
        return <Card data={DataObj} key={DataObj.id} />
       })
       } 
       </div>
       </div>
    );
}

export default Courses;