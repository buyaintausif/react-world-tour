import { useState } from 'react';
import './Country.css'

const Country = ({desh}) => {
    const{name,flags,population,area,cca3}=desh;

    const [visited,setVisited]=useState(false);

    const handleVisited=()=>{
        setVisited(!visited);
    }

   
    return (
        <div className='country'>
            <h3>Country Name:{name.common}</h3>
            <p>Area:{population}</p>
            <p>Population:{population}</p>
            <img src={flags.png} alt="" />

            <p><small>Code: {cca3}</small></p>

            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
            {visited?'We have visited':'we will visit '}
        </div>
    );
};

export default Country;