import { useState } from 'react';
import './Country.css'

const Country = ({desh,handleVisitedCountry,handleVisitedFlags}) => {
    const{name,flags,population,area,cca3}=desh;

    const [visited,setVisited]=useState(false);

    const handleVisited=()=>{
        setVisited(!visited);
    }


    //to pass value in event handler the fuction should be a arrow fucntion

    const passWithParams=()=>{
        handleVisitedCountry(desh)
    }

   
    return (
        <div className={`country ${visited?'visited':'non-visited' }`}>
            <h3 style={{color:visited ? 'purple':'black'}}>Country Name:{name.common}</h3>
            <p>Area:{population}</p>
            <p>Population:{population}</p>
            <img src={flags.png} alt="" />

            <p><small>Code: {cca3}</small></p>

            <br />

            <button onClick={()=>handleVisitedFlags(desh.flags.png)}>Add Visited Flag</button>

            <br />

            <button onClick={passWithParams}>Mark Visited</button>

            <br />
            

            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
            {visited?'We have visited':'we will visit '}
        </div>
    );
};

export default Country;