const SearchAndFilter = ({SetSearchInput , setfilterregion}) =>{

 return <div className="search_and_filter">
 <div className="search">
            <div className="searchicon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search for a Country..." onChange={(e)=>{SetSearchInput(e.target.value)} }  ></input>
            </div>
        </div>
            <select onChange={(e)=>{ setfilterregion(e.target.value)}} className="filter" default="all" name="regions">
              <option value="all" hidden >Filter by Region</option>
              <option value="region/Africa">Africa</option>
              <option value="region/America">America</option>
              <option value="region/Asia">Asia</option>
              <option value="region/Europe">Europe</option>
              <option value="region/Oceania">Oceania</option>
              <option value="all">No Filter</option>
            </select>
 </div>
}
export default SearchAndFilter;