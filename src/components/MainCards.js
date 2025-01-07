import { useEffect, useState } from 'react';
import Card from './Card';
import ShimmerHome from './ShimmerHome';

const MainCards = ({ SearchInput , filterregion}) => {
  
  const [countries , setcountries] = useState([]);
  useEffect(()=>{fetch(`https://restcountries.com/v3.1/${filterregion}`).then((res)=>
     res.json())
    .then((data) => {setcountries(data)})

    return () =>{
      console.log('cleaning up');  
    }
}
,[filterregion,SearchInput])
  const array = countries
    .filter((country) => {
      return country.name.common.toLowerCase().includes(SearchInput.toLowerCase()) || country.region.toLowerCase().includes(SearchInput.toLowerCase());
    })
    .map((country) => {
      return (
        <Card
          countryData = {country}
          key={country.name.common}
          name={country.name.common}
          url={country.flags.svg}
          population={country.population}
          Region={country.region}
          Capital={country.capital}
        />
      );
    });

  return (array.length === 0 ) ? <ShimmerHome/> : <div className="main_cards">{array}</div>;
};

export default MainCards;
