import React, { useState } from 'react'
import { Link } from '@reach/router'

const AuthorForm = (props) => {
    const { initialName, onSubmitProp } = props;
    const [name, setname] = useState(initialName);
    const handelSubmit = (e) => {
        e.preventDefault();
        
        onSubmitProp({ name });
    }
    

    return (
        <div>
            <Link to="/">Home</Link>
            <p>Add a new author</p>
            <p>Name:</p>
            <form onSubmit={handelSubmit}>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AuthorForm
