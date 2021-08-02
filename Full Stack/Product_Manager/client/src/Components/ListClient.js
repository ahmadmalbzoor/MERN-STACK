import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
const ListClient = (props) => {
    const {removeFromDom}=props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
        }
    return (
        <div>
             {
                
                props.product.map((product,i)=>{
                     return(
                         <>
                     <p><Link to={`people/${product._id}`}><p key={i}>{product.type},{product.price},{product.description}</p></Link></p>
                     <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                    </>
                     );
                 })
                 
             }
        </div>
    )
}
export default ListClient;
 