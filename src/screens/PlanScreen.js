import React, { useState } from 'react'
import "./PlanScreen.css"
function PlanScreen({name,details}) {
    const [button, setButton] = useState('Subscribe')

    const handleClick = () =>{
              setButton((preval)=>{
                  if(preval === 'Subscribe'){
                      return 'Current Package'
                  }
                  else{
                      return 'Subscribe';
                  }
              })
    }
    return (
        <div className="planScreen">

             <div className="planScreen__info">
                  <h5>{name}</h5>
                  <h6>{details}</h6>  
            </div>  
            <button onClick={handleClick}>{button}</button>
        </div>
    )
}

export default PlanScreen
