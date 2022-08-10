import React from 'react';
import MentorsDataArr from '../../data/MentorsDataArr';
import MentorsCard from './MentorsCard';
import './MentorsStyles.css';

const Mentor=()=> {


    return ( 

       <div className="main-mentor-container">
       <h3>New Mentors on Evolove</h3>
       <div className="mentor-container">
       {
       MentorsDataArr.map((DataObj)=>{
        return <MentorsCard data={DataObj} key={DataObj.id}/>
       })
       } 
       </div>
       </div>
    );
}
export default Mentor;