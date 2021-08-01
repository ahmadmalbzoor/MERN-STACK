import React from 'react';
import { Link } from '@reach/router';

const ListClient = (props) => {
    return (
        <div>
             {
                
                props.product.map((product,i)=>{
                     return(<Link to={`people/${product._id}`}><p key={i}>{product.type},{product.price},{product.description}</p></Link>);
                 })
             }
        </div>
    )
}
export default ListClient;
 