import React,{useState} from 'react';
import axios from 'axios'

const Pokemon=(props)=>{
    const[pokemon,setPokemon]=useState([]);
    const handelClick=()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{setPokemon(response.data.results)})
    }
    return(
        <div>
        <input type="submit" value="Show Pokemon" onClick={handelClick}/>
        {
            pokemon.length>0 && pokemon.map((pok,index)=>{
                return(
                    <div key={index}>{pok.name}</div>
                );
            }
            )
               
            }
        
    </div>
        
    );
}
export default Pokemon;