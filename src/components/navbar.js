import React from 'react';
import FeatherIcon from "feather-icons-react";


function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                <div className={"container"}>
                    <a className="navbar-brand color-primary logo-txt" href="astrolive/src/components/navbar#"> <FeatherIcon
                        className={"color-primary"}
                        icon="archive"/> AstroLive</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ms-auto">
                            <li className="nav-item  fw-bold">
                                <a className="nav-link" href="astrolive/src/components/navbar#">Hosting </a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link" href="astrolive/src/components/navbar#">Link</a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link " href="astrolive/src/components/navbar#">Login</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;