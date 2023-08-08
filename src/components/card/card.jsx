import React from "react";




export const Card = (name)=>{
    
    return (
        <div>
            <h1>{name.name}</h1>
            <h1>{name.age}</h1>
        </div>
    )
}