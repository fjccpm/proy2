import React from "react"
import "../style.css"

export default function Card(card_details) {

    let badgeText
    if (card_details.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (card_details.country === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require("../images/"+card_details.image)} className="card--image" />
            <div className="card--stats">
                <img src={require("../images/star.png")} className="card--star" />
                <span>{card_details.rating}</span>
                <span className="gray">({card_details.ratings}) • </span>
                <span className="gray">{card_details.country}</span>
            </div>
            <p>{card_details.name}</p>
            <p><span className="bold">From ${card_details.price}</span> / person</p>
        </div>
    )
}