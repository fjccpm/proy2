import React from "react";
import airbnb_logo from "../images/airbnb-logo.png"
import "../style.css"

export default function NavBar() {
    return (
        <nav>
            <img src={airbnb_logo} className="nav--logo"/>
        </nav>
    )
}