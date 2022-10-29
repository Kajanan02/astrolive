import React from 'react';

function Header(props) {
    return (
        <div className=" mb-5">
            <div className={"container"}>
                <div className={"mt-5"}>

                    <div className={"header"}>
                        <div className={"header-text"}>
                            Let Your curiosity do the <br/> booking
                        </div>
                        <div className={"text-center mt-3"}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s
                        </div>

                        <button type="button" className="btn btn-light fw-bold mt-5 w-120">Explore</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;