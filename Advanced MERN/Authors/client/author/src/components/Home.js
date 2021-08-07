import React,{useState,useEffect} from 'react'
import {Link} from '@reach/router'
import ListForm from './ListForm';

const Home = () => {
    const [author, setAuthor] = useState([])
    const [loaded, setLoaded] = useState(true);
    console.log(author)
    
    return (
        <div>
            <Link to='/new'>Add an author</Link>
            <p>We have a quotes by:</p>
            {loaded && <ListForm />}
        </div>
    )
}

export default Home
