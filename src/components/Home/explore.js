import React from 'react';

export default function Explore(props) {
    return (
        <div className={"container  pt-5  mb-5"}>
            <div className={"text-center pb-5"}>
                <h2 className={"text_line_img heading position-relative"}>Explore of the World.</h2>
            </div>

            <div className={"row"}>
                <div className={"col-md-6"}>
                    <div className={"explore-card"}>
                        <div className={"explore-card-heading"}>More Options with More Features</div>
                        <div>Tick one more destination off your <br/> wishlist</div>
                        <button type="button"
                                className="btn bg-primary text-white fw-bold mt-3 w-120 explore-card-btn">Explore
                        </button>
                    </div>
                </div>
                <div className={"col-md-6"}>
                    <div className={"explore-card explore-card-2nd"}>
                        <div className={"explore-card-heading"}>Escape for a while</div>
                        <div>Enjoy the freedom of an extended stay<br/> on AstroLive.com</div>
                        <button type="button"
                                className="btn bg-primary text-white fw-bold mt-3 explore-card-btn">Discover extended
                            stays
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

