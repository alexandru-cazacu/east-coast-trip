import React from "react";
import "./pageNotFound.style.css";

function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1 className="title">404 <span className="fa fa-frown-o"></span></h1>
            <p className="content">Nothing here, just you and me.</p>
        </div>
    );
}

export default PageNotFound;
