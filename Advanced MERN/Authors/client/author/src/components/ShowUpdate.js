import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from './AuthorForm'
import { navigate } from '@reach/router';
const ShowUpdate = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState("");
    const [loaded, setLoaded] = useState(false);
    console.log(id);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res =>{ 
                console.log(res.data)
            });
    }
    console.log("ahmad");

    return (
        <div>
            {
                loaded && (
                    <AuthorForm authorId={id} onSubmitProp={updateAuthor} initialName={author.name} />
                  
                    

                )
                

            }
            <button onClick={()=>navigate("/")}>Cancel</button>

        </div>
    )
}

export default ShowUpdate
