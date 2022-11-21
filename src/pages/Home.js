// import { useEffect, useState } from "react"
import BreweryListDetails from "../components/BreweryListDetails"
import useFetch from '../services/useFetch'

//   "proxy": "https://rsm-brewery-backend-app.herokuapp.com",


const Home = () => {
    // const {data: breweries, isPending, error} = useFetch('https://api.openbrewerydb.org/breweries?by_city=detroit&per_page=10');
    const {data: breweries, isPending, error} = useFetch('https://rsm-brewery-backend-app.herokuapp.com/api/breweries/city/San Diego');
    return (
        <div className="home">
            <div className="brewery">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {breweries && breweries.map((brewery) => (
                    <BreweryListDetails key={brewery._id} brewery={brewery}></BreweryListDetails>
                    // <BreweryListDetails key={brewery.id} brewery={brewery}></BreweryListDetails>
                ))}
            </div>
        </div>
    )
}

export default Home