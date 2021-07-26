import React from 'react';
const Hello=(props)=>{
    return(
        <div>
           {
               isNaN(props.hello)?<p style={{color:props.font,background:props.back}}> The Word is {props.hello}</p>:<p>The number is{props.hello}</p>
           } 
            
        </div>
    );
}
export default Hello;