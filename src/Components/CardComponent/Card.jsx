import React from 'react';
import './CardStyles.css';

const Card=({data})=> {


    return ( 

       <>
        
        <div className={(data.id==3)?"card-container-none": "card-container"}>
        <img src={data.imgLink} className="card-img"/>
        <div className="card-text">
        <p className="card-title">{data.title}</p>
        <p className="card-des">{data.des}</p>
        <p className="card-name" >{data.name}</p>
        {
            (data.id==1)?<div className="card-joinnow">Join Now</div>:<div className="card-remindme" >Remind Me</div>
        }
        <p id="card-time">120 mins</p>
        </div>
       </div>
       </>

    );
}

export default Card;