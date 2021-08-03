import axios from 'axios';
import React,{useState} from 'react';
const Client = (props) => {
    const { initialType, initialPrice,initialDescription, onSubmitProp } = props;
    const [type, setType] = useState(initialType);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const handelSubmit=(e)=>{
        e.preventDefault();
        onSubmitProp({type,price,description});
       
    }
    const handeltitle=(e)=>{
        e.preventDefault();
        setType(e.target.value);
    }
    const handelprice=(e)=>{
        e.preventDefault();
        setPrice(e.target.value);
    }
    const handeldescrioption=(e)=>{
        e.preventDefault();
        setDescription(e.target.value);
    }
        
    return(
        <div>
            <form onSubmit={handelSubmit}>
                title:<input placeholder="Enter the title" onChange={handeltitle} value={type}/>
                price:<input placeholder="Enter the price" onChange={handelprice} value={price}/>
                description: <input placeholder="Enter the description" onChange={handeldescrioption} value={description}/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}

export default Client