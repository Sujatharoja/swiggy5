import React from "react";
import ScrollImages from "../components/ScrollImages"
import ScrollCards from "../components/ScrollCards";
import BodyCards from "../components/BodyCards";

function Home(){
    return(
        <div className="home">
            <ScrollImages/>
            <hr/>
            <ScrollCards/>
            <hr/>
            <BodyCards/>
        </div>
    )
}
export default Home