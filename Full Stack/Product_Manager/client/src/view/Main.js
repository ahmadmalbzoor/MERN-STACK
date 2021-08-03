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
      
      const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    const createProduct=newProduct=>{
        axios.post('http://localhost:8000/api/product',newProduct)
        .then(res=>{
            setProduct([...product, res.data]);
        })

    }
    return (
        <div>
            
                <Client onSubmitProp={createProduct} initialType="" initialPrice="" initialDescription=""/>
                <hr/>
                {load && <ListClient product={product} removeFromDom={removeFromDom}/>}
            
        </div>
    )
    }
export default Main

