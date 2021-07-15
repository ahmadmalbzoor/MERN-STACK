import React,{useState } from "react"
const PersonCard=props=>{
    const [Age,setCount] = useState(props.Age);
    const handleClick = () => {
        setCount(Age + 1);

        }
        
    return(
        <div>
            <h1>{props.firstName},{props.lastName}</h1> 
            <p>{Age}</p>
            <p>{props.hairColor}</p> 
            <button onClick={handleClick}>Change Age</button>
        </div> 
    );
    
}

export default PersonCard; 