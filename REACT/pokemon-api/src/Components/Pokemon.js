import React,{useState} from 'react';
const Pokemon=(props)=>{
const [pokemon, setPokemon] = useState([]);
const handelClick=(e)=>{
e.preventDefault();
fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
.then(response => response.json())
.then(response => setPokemon(response.results))

};
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