import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <h1>RSM Brewery App</h1>
                <Link to="/">Home</Link>
            </div>
        </header>
    )
}

export default Navbar