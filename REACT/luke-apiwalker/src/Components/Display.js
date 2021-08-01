import React,{useState,useEffect} from "react";
import axios from 'axios';

const Display = (props) => {
    const {stars,id}=props;
    const [result,setResult]=useState("");
    console.log(id);
    const displayData=(stars,id)=>{
    axios.get("https://swapi.dev/api/"+stars+"/"+id)
    .then(response => setResult(response.data)) //setResult(response.data.results))
    .catch(reject => setResult({error:"These aren't the droids you're looking for"}))
        console.log("im hereee")
      
    } 
    useEffect(()=>{displayData(stars,id);}, [stars,id]);
    return(
        stars==="people"?
        <div>
            <h1>{result.name}</h1>
            <labael>Height :</labael> <p>{result.height}</p>
            <labael>Mass :</labael> <p>{result.mass}</p>
            <labael>Hair Color :</labael> <p>{result.hair_color}</p>
            <labael>Skin Color :</labael><p>{result.skin_color}</p>

        </div>:<div>
        <h1>{result.name}</h1>
            <labael>Climate :</labael> <p>{result.climate}</p>
            <labael>Terrain :</labael> <p>{result.terrain}</p>
            <labael>Surface :</labael> <p>{result.surface_water}</p>
            <labael>Population :</labael><p>{result.population}</p>
        </div>
    );
   }
export default Display;