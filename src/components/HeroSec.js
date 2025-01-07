import React, { useState } from 'react'
import SearchAndFilter from './SearchAndFilter'
import MainCards from './MainCards'

const HeroSec = () =>{
   const [SearchInput , SetSearchInput]  = useState('');
   const [filterregion , setfilterregion] = useState('all');
   return <div className={`hero_sec`}>
   <SearchAndFilter SetSearchInput={SetSearchInput} setfilterregion={setfilterregion} />
   {SearchInput === 'unmount' ? '' : <MainCards SearchInput ={SearchInput} filterregion = {filterregion} />}
   </div>
}

export default HeroSec;