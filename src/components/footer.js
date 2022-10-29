import React from 'react';
import FeatherIcon from "feather-icons-react";

export default function Footer(props) {
    return (
        <div className={"bg-light border-top py-5"}>
            <div className={"container"}>
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">Features</a>
                            </li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">Pricing</a>
                            </li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">Features</a>
                            </li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">Pricing</a>
                            </li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">Features</a>
                            </li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">Pricing</a>
                            </li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="astrolive/src/components/footer#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control"
                                       placeholder="Email address"/>
                                <button className="btn fw-bold text-white bg-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p className={"fw-bold footer-icons"}>&copy; 2022 AstroLive Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <FeatherIcon className={"cursor-pointer footer-icons me-3"}
                                     icon="facebook"/>
                        <FeatherIcon className={"cursor-pointer footer-icons me-3"}
                                     icon="twitter"/>
                        <FeatherIcon className={"cursor-pointer footer-icons me-3"}
                                     icon="linkedin"/>
                        <FeatherIcon className={"cursor-pointer footer-icons me-3"}
                                     icon="instagram"/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

