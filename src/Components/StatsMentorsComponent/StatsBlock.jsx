
import React from 'react';
import './StatsBlockStyles.css';

const StatsBlock = () => {

   const arr = [{ num: 12, des: "Experiences this week" }, { num: 24, des: "Experiences overall" }, { num: 12, des: "courses this week" }];

   return (

      <div classname="stat-blocks-main-container">
         <h2 className="stat-blocks-title">Your Stats</h2>
         <div className="stat-blocks">
            {
               arr.map((data) => {
                  return (
                     <div className="stats-block-container" key={data.des}>
                        <p className="stats-block-name" >{data.num}</p>
                        <p className="stats-block-des" >{data.des} </p>
                     </div>
                  )
               })

            }

         </div>
      </div>

   );
}

export default StatsBlock;