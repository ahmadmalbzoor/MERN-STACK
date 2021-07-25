import React from 'react';

import { Button } from '@material-ui/core';

function Tabs(props) {
    const {tabs} = props;
    const handleClick = (e, content) => {
        props.changeCurrentContent(content);
    }
    
   
    return(
        
            <nav>
                 {
                     tabs.map(
                         (tab,index)=>{
                             return(
                                 <Button  variant="contained" color="secondary" id={tab.id} key={tab.id} onClick={(e)=>handleClick(e,tab.content)}>{tab.label}</Button >
                             )
                         }
                     )
                 }
            </nav>
        
    );
};

            
export default Tabs;