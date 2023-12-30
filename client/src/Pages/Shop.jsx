import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollections from "../Components/NewCollections/NewCollections.jsx";
const shop = () =>{
    return(
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
        </div>
    )
}

export default shop;
