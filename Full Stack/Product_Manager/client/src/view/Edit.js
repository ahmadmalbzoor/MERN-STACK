import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Client from '../Components/Client';
import { navigate } from '@reach/router';
import DeleteButton from '../Components/DeleteButton';
const Edit = (props) => {
    const {id} = props;
    const [product,setProduct]=useState();
   const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => { 
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    
    const handelSubmit = (product) => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => console.log(res));
        }
 
    return (
        <div>
           {loaded && (
               <>
    <Client
        onSubmitProp={handelSubmit}
        initialType={product.type}
        initialPrice={product.price}
        initialDescription={product.description}


    />
         <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
    </>
)}
            {/* <h1>Edite Page</h1>
            <form onSubmit={handelSubmit}>
                <input type="text" value={type} onChange={handelChangeType} />
                <input type="text" value={price} onChange={handelChangePreice} />
                <input type="text" value={description} onChange={handelChangeDescription} />
                <input type="submit" value="Edit" />
            </form> */}
        </div>
    )
}

export default Edit
