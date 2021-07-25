import React,{useState} from 'react';
const AddBox=(props)=>{
    const[color,setColor]=useState("");
    const[hight,setHight]=useState(0);
    const[width,setWidth]=useState(0);
    const handelSubmit=(e)=>{
      
        e.preventDefault();
        props.addDiv(color,width,color);
        setColor("")
        setWidth(0)
        setHight(0)

    }
    const handelWidth=(e)=>{
        setWidth(e.target.value)  ;      
    }
    const handelHight=(e)=>{
        setHight(e.target.value) ;       
    }
    const addcolor=(e)=>
    {
        setColor(e.target.value);
    }
    return(
        <form onSubmit={handelSubmit}>
            <input type="text" value={color} onChange={addcolor}/>
            <input type="text" value={width} onChange={handelWidth}/>
            <input type="text" value={hight} onChange={handelHight}/>
            <input type="submit" value="Add Box Color"/>
        </form>
    );
};
export default AddBox;