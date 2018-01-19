import React from "react";
import "../styles/pageNotFound.css";
import bg1 from "../images/abstract-bg1.png";

function PageNotFound() {
    return (
        <div className="page-not-found">
            <img src={bg1} alt="" />
            <h1 className="title">404 <span className="fa fa-frown-o"></span></h1>
            <p className="content">Nothing here, just you and me.</p>
        </div>
    );
}

export default PageNotFound;
