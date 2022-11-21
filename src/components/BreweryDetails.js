import { useParams } from "react-router-dom"
import useFetch from '../services/useFetch'
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";

const BreweryDetails = () => {
    const {id} = useParams()
    const {data: breweryDetails, isPending, error} = useFetch('https://rsm-brewery-backend-app.herokuapp.com/api/breweries/id/'+id);
    // const {data: breweryDetails, isPending, error} = useFetch('https://api.openbrewerydb.org/breweries/'+id);

    return (
        <div className="brewery-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {breweryDetails && (
                <div className="brewery-list-details">
                    <h4>{breweryDetails.name}</h4>
                    <p><strong>Type: </strong>{breweryDetails.brewery_type}</p>
                    <p>
                        <strong>Address: </strong>{breweryDetails.street}
                        <strong>, </strong>{breweryDetails.city}
                        <strong>, </strong>{breweryDetails.state}
                        <strong> </strong>{breweryDetails.postal_code}
                    </p>
                    <p><strong>Website: </strong><a href={breweryDetails.website_url} target="_blank">{breweryDetails.website_url}</a></p>
                    <div className="brewery-map" style={{ height: '100vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyByg-42ez7-plhMU7M8TQVQcQKOmfyvZDc" }}
                            defaultCenter={{lat: breweryDetails.latitude ? Number(breweryDetails.latitude) : 42.3314, lng: breweryDetails.longitude ? Number(breweryDetails.longitude) : -83.0458}}
                            defaultZoom={14}
                        >
                            <Marker
                                lat={breweryDetails.latitude ? breweryDetails.latitude : 42.3314}
                                lng={breweryDetails.longitude ? breweryDetails.longitude : -83.0458}
                                name="My Marker"
                                color="red"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BreweryDetails