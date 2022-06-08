import React from "react";

const Heading=(props)=>{
    return(
        <div className="heading" >
            
            <h1>{props.header}</h1>
            <input  
            type="input" 
            placeholder="Type to search..."
            value={props.value}
            onChange={(event)=>{
                props.seabar(event.target.value)}}></input>
        </div>
    )

}

export default Heading;