import React,{useState,useEffect} from 'react';
import ListClient from '../Components/ListClient';
import Client from '../Components/Client';
import axios from 'axios';
 const Main = () => {
    const[product,setProduct]=useState([]);
    const[load,setLoaded]=useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/show')
        .then(res=>{
            setProduct(res.data);
            setLoaded(true);
      }, [product,load])})
    
    return (
        <div>
            
                <Client/>
                {load && <ListClient product={product}/>}
            
        </div>
    )
    }
export default Main

