import React, { useState,useEffect } from 'react'
import axios from 'axios';
const Details = ({id}) => {
    const [product,setProduct]=useState({});
    useEffect(() => {
            axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <p>title:{product.type}</p>
            <p>price:{product.price}</p>
            <p>description:{product.description}</p>
        </div>
    )
}

export default Details
