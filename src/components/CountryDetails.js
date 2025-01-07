import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router";
import Error from "./Error";
import ShimmerDetails from "./ShimmerDetails";

export default function CountryDetails() {
  const params = useParams();
  const countryName = params.Country;
  const [countryData, setCountryData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [notFound, setNotFound] = useState(false);

  // Fetch main country details
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => {
        if (!res.ok) throw new Error("Country not found");
        return res.json();
      })
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName || {})[0]?.common || "N/A",
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital ? data.capital.join(", ") : "N/A",
          flag: data.flags.svg,
          tld: data.tld,
          languages: data.languages
            ? Object.values(data.languages).join(", ")
            : "N/A",
          currencies: data.currencies
            ? Object.values(data.currencies)
                .map((currency) => currency.name)
                .join(", ")
            : "N/A",
          borders: data.borders || [],
        });
      })
      .catch(() => setNotFound(true));
  }, [countryName]);

  // Fetch border country details
  useEffect(() => {
    if (countryData?.borders?.length) {
      Promise.all(
        countryData.borders.map((border) =>
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([data]) => data.name.common)
            .catch(() => "Unknown")
        )
      ).then(setBorderCountries);
    }
  }, [countryData]);

  // If country not found
  if (notFound) {
    return <Error />;
  }

  // If still loading
  return countryData === null ? (
    <ShimmerDetails />
  ) : (
    <div className={`hero_sec `}>
      <a onClick={() => history.back()}>
        <div className="backbutton">
          <i className="fa-solid fa-arrow-left" />
          <p>&nbsp;Back</p>
        </div>
      </a>
      <div className="main-details">
        <div
          className="flag"
          style={{ backgroundImage: `url(${countryData.flag})` }}
        />
        <div className="country_details">
          <h2 className="country_name">{countryData.name}</h2>
          <div className="sub-details">
            <p>
              <b>Native Name:</b> {countryData.nativeName}
            </p>
            <p>
              <b>Population:</b> {countryData.population}
            </p>
            <p>
              <b>Region:</b> {countryData.region}
            </p>
            <p>
              <b>Sub Region:</b> {countryData.subregion}
            </p>
            <p>
              <b>Capital:</b> {countryData.capital}
            </p>
            <p>
              <b>Top Level Domain:</b> {countryData.tld}
            </p>
            <p>
              <b>Currencies:</b> {countryData.currencies}
            </p>
            <p>
              <b>Languages:</b> {countryData.languages}
            </p>
          </div>
          <div className="border-details">
            <p>
              <b>Border Countries:</b>
            </p>
            <div className="borders">
              {borderCountries.length ? (
                borderCountries.map((border) => (
                  <Link to={`/${border}`} key={border}>
                    <div>{border}</div>
                  </Link>
                ))
              ) : (
                <a>
                    <div>NO BORDER COUNTRY</div>
                  </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

