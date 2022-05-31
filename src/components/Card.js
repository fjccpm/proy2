import React from "react"
import "../style.css"

export default function Card(card_details) {

    let badgeText
    if (card_details.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (card_details.country === "Online") {
        badgeText = "ONLINE"
    }

    function onClickEventHandler() {
        alert("click en el id:" + card_details.id);
    }

    return (
        <div className="card"  onClick={onClickEventHandler}>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require("../images/"+card_details.image)} className="card--image" alt="Sorry"/>
            <div className="card--stats">
                <img src={require("../images/star.png")} className="card--star" alt="Sorry" />
                <span>{card_details.rating}</span>
                <span className="gray">({card_details.ratings}) • </span>
                <span className="gray">{card_details.country}</span>
            </div>
            <p>{card_details.name}</p>
            <p><span className="bold">From ${card_details.price}</span> / person</p>
        </div>
    )
}