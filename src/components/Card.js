import { Link } from 'react-router'


const Card = ({ name, url, population, Region, Capital ,countryData }) => {
    return (
      <Link to={`/${name}`} state={countryData}>
        <div className="card">
          <div
            className="flag"
            style={{ backgroundImage: `url(${url})` }}
          />
          <div className="information">
            <p className="name">{name}</p>
            <p className="population">
              <b>Population: </b>{population}
            </p>
            <p className="region">
              <b>Region:</b> {Region}
            </p>
            <p className="capital">
              <b>Capital:</b> {Capital}
            </p>
          </div>
        </div>
      </Link>
    );
  };
  
  export default Card;
  