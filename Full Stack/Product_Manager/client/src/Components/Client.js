import axios from 'axios';
import React,{useState} from 'react';
const Client = () => {
    const [type, setType] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const handelSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',{type,price,description})
        .then(res=>{console.log(res)
            setType("");
            setPrice("");
            setDescription("");
        
        })

        .catch(err=>console.log(err))
    
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