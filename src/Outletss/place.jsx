import { useState } from "react";
import "./place.css";

export default function Location() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (location) => {
        setActiveDropdown(activeDropdown === location ? null : location);
    };

    const cities = ["Chennai", "Bangalore", "Mumbai", "Delhi"];

    const buttonStyle = {
        padding: "20px",
        backgroundColor: "gray",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "8px",
        cursor: "pointer",
        width: "130px",
        transition: "background-color 0.3s",
        border: "none",
    };

    const buttonHoverStyle = {
        backgroundColor: "#4a4a4a",
    };

    const dropdownStyle = {
        marginTop: "10px",
        padding: "15px",
        backgroundColor: "#d1d1d1",
        border: "1px solid black",
        borderRadius: "8px",
        transition: "opacity 0.3s, height 0.3s",
    };

    return (
        <div className="container" style={{ padding: "20px" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {cities.map((city) => (
                    <button
                        key={city}
                        className="buttonStyle"
                        style={buttonStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                        onClick={() => toggleDropdown(city)}
                    >
                        {city}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: "15px" }}>
                {cities.map((city) => (
                    activeDropdown === city && (
                        <div key={city} className="dropdownStyle" style={dropdownStyle}>
                            Welcome to {city}!
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}