import React from 'react';
import './CardStyles.css';

const Card=({data})=> {


    return ( 

       <>
       <div className="card-container">
        <img src={data.imgLink} className="card-img"/>
        <p className="card-title">{data.title}</p>
        <p className="card-des">{data.des}</p>
        <p className="card-name" >{data.name}</p>
        {
            (data.id==1)?<div className="card-joinnow">Join Now</div>:<div className="card-remindme" >Remind Me</div>
        }
       </div>
       </>

    );
}

export default Card;