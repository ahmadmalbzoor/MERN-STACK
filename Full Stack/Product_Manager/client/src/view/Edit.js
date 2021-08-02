import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Edit = (props) => {
    const {id} = props;
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [description, setdescription] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => { 
                setType(res.data.type);
                setPrice(res.data.price);
                setdescription(res.data.description); })
        console.log("im hereeeeeeeeeeeeeeeeeeee")
        console.log(price);
    }, [])

    const handelSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, { type, price, description })
            .then(res => console.log(res));
    }
    const handelChangeType = (e) => {
        e.preventDefault();
        setType(e.target.value);
    }
    const handelChangePreice = (e) => {
        e.preventDefault();
        setPrice(e.target.value);
    }
    const handelChangeDescription = (e) => {
        e.preventDefault();
        setdescription(e.target.value);
    }
    return (
        <div>
            <h1>Edite Page</h1>
            <form onSubmit={handelSubmit}>
                <input type="text" value={type} onChange={handelChangeType} />
                <input type="text" value={price} onChange={handelChangePreice} />
                <input type="text" value={description} onChange={handelChangeDescription} />
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default Edit
