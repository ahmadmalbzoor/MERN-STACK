import React,{useState,useEffect} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
const ListClient = (props) => {
    const [product, setProduct] = useState([]);
    const { removeFromDom } = props;
    useEffect(() => {
        
        axios.get('http://localhost:8000/api/product')
        .then(res => setProduct(res.data));
        
    }, [])
    const removeFromDomm = productId => {
        setProduct(product.filter(product => product._id != productId))
        
}
return (
    <div>
        {

            props.product.map((product, i) => {
                return (
                    <>
                        <p><Link to={`people/${product._id}`}><p key={i}>{product.type},{product.price},{product.description}</p></Link></p>
                        {/* <button onClick={(e) => { removeFromDomm(product._id) }}>
                            Delete
                        </button> */}
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDomm(product._id)}/>

                    </>
                );
            })

        }
    </div>
)
}
export default ListClient;
