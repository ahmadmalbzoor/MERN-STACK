import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { navigate } from '@reach/router';

const ListForm = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    })
    const removeFromDom = authorId => {
        setAuthor(author.filter(authors => authors._id != authorId));
    }


    return (
        <div>
            {
                author.map((author, i) => {
                    return (
                        <>
                            <p key={author._id}>{author.name}</p>
                            <DeleteButton userid={author._id} successCallback={() => { removeFromDom(author._id) }} />
                            <button onClick={e=>{navigate(`/${author._id}`)}}>Edit</button>
                        </>
                        
                    )
                })
            }
        </div>
    )
}

export default ListForm
