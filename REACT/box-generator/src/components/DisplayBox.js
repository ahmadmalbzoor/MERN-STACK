import React from 'react';
const DisplayBox=(props)=>{
    return(
        <div className='show'>
            
             {props.boxes.map(
                (item, index) =>
                
                    <div style={{ width:100 + 'px', height: 100 + 'px', backgroundColor: item.color, marginLeft: 10 + 'px' }} ></div>
           
           )}
        </div>
);
};
export default DisplayBox;
