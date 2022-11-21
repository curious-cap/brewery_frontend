import { Link } from "react-router-dom"

const BreweryListDetails = ({brewery}) => {
    return (
        <div className="brewery-list-details">
            <Link to={`/brewery-details/${brewery._id}`} style={{ textDecoration: 'none' }}>
                <h4>{brewery.name}</h4>
            </Link>
            <p><strong>Type: </strong>{brewery.brewery_type}</p>
            <p>
                <strong>Address: </strong>{brewery.street}
                <strong>, </strong>{brewery.city}
                <strong>, </strong>{brewery.state}
                <strong> </strong>{brewery.postal_code}
            </p>
            <p><strong>Website: </strong><a href={brewery.website_url} target="_blank" rel="noreferrer">{brewery.website_url}</a></p>
        </div>
    )
}

export default BreweryListDetails