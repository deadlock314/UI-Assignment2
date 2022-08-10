import React from 'react';
import './MentorsCardStyles.css';

const MentorsCard=({data})=> {


    return ( 

       <>
       <div className="mentorscard-container">
        <img src={data.imgLink} className="mentorscard-img"/>
        <div>
        <h4 className="mentorscard-name">{data.name}</h4>
        <p className="mentorscard-des" >{data.des}</p>
        <p className="mentorscard-see-more" >SEE MORE</p>
        </div>
       </div>
       </>

    );
}

export default MentorsCard;