import React from "react";
import "./Descriptionbox.css";


const DescriptionBox = ()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>Decription of website</p>
                <p>
                    Another Description
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox