import React from "react";

function contactItemImage({imageUrl}) {
    return (
        <div className="contact-item__image">
            <img src={imageUrl} alt="contact avatar"/>
        </div>
    );
}

export default contactItemImage