import React, { useState } from 'react';
import Loader from '../../Components/Global/Loader';
//Components
import Form from '../../Components/Home/Form';
import Pokemon from '../../Components/Home/Pokemon';
//Styles
import "./Home.styles.css";

const Home = () => {
  const [loader, setLoader] = useState(false);
  const [information, setInformation] = useState(null);
  const [pokemon, setPokemon] = useState("");
  const [message, setMessage] = useState();
  const [team, setTeam] = useState([])

  const handleSearch=async()=>{
    
    setMessage(false);
    setInformation(null);
    setLoader(true);
    if (pokemon) {
    try {
      const API = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(API);
      const result = await response.json(); 
      setInformation(result);
      setLoader(false);
      setPokemon("")
      setTeam([...team,{Name:result.name,ID:result.id,Img:result.sprites.front_default}])
    } catch (error) {
      setLoader(false);
      setMessage("Pokemon not found");
    }}
    else{
      setLoader(false);
      setMessage("Enter a Name");
    }
  }

  const handlePokeName=(e)=>{
    setPokemon(e.target.value);
  }

  return (
    <div className='Home'>
      {message&&
        (message)}
      <Form
      clean={pokemon}
      handleSearch={handleSearch}
      handlePokeName={handlePokeName}/>
        {information &&
        (<Pokemon
          Name={information.name}
          ID={information.id}
          Img={information.sprites.front_default}
          add={true}
          />)
        }
        {loader && <Loader/>}
        <h2>Team</h2>
      <div className='Pokemons'>
        {team?.map((poke)=>{ 
          return <Pokemon
          Name={poke.Name}
          ID={poke.ID}
          Img={poke.Img}
          key={poke.ID}
          />
        })
      }
      {team.length===0 &&
          ('No Pokemons captured yet') }
      </div>
    </div>
  )
}

export default Home