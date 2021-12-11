import React,{useState,useEffect } from 'react';
const Character = () => {
  const [characters,setCharacters]=useState([]);
  useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response=>response.json())//convirtiendo en objeto 
        .then(data=>setCharacters(data.results))//pasando el
  },[]);
    
    return (
        <div className="Characters">
            {characters.map(character=>
            (<h2>{character.name}</h2>))}
        
        </div>
    )
}

export default Character
