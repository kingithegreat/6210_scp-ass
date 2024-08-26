import { NavLink } from "react-router-dom";
import { SCPS } from "../data/scp";
import '../styles/Nav.css'; 

function Nav() {
    const showAlert = (event) => {
        event.preventDefault(); // Prevents the form from submitting
        alert("YOU ARE NOT AUTHORIZED TO VIEW THIS CONTENT");
    };

    return (
        // Main navigation bar container with Bootstrap classes for styling
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div className="container-fluid">
                {/* Logo image */}
                <img id="images" src="/images/th.jpg" alt="Scp-image" style={{ height: '40px' }} />
                
                {/* Brand link with custom styling */}
                <NavLink className="navbar-brand text-danger fw-bold fst-italic ms-3" to="/">
                    SCP Home Page
                </NavLink>
                
                {/* Toggler button for collapsing the navbar on smaller screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Collapsible part of the navbar */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Mapping through SCPS data to create navigation links */}
                        {SCPS.map((scps) => (
                            <li className="nav-item" key={scps.Title}>
                                <NavLink 
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                                    to={`/scp/${scps.Title}`}
                                >
                                    {scps.Title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Search form */}
                    <form className="d-flex" onSubmit={showAlert}>
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                        />
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
