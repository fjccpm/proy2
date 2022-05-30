import React from "react";
import photo_grid from "../images/photo-grid.png"
import "../style.css"

export default function Hero() {
    return (
        <section className="hero">
            <img src={photo_grid} className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join Unique interactive activities led by one-of-a-kind-hosts-all without leaving home</p>
        </section>
    );
}