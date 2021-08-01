import React,{useState} from "react";
import { Link } from '@reach/router';

const Home=()=>{
    const [id, setId] = useState(0);
    const [stars, setStars] = useState("people");
    
    const handelsubmit=(e)=>{
        e.preventDefault();
        setStars(e.target.value);
    }
   
    const handleId = (e) => {
        e.preventDefault();
        setId(e.target.value);
    }
    
    return(
        <div>
            <form >
                <label>Search for:</label>
                <select value={stars} onChange={handelsubmit}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label>ID</label>
                <input type="text" value={id} onChange={handleId}></input>
                <Link to={`/${stars}/${id}`}>Search</Link>
            </form>
           
        </div>
    );
}
export default Home;
