import React from 'react';
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 py-3">
                <div className="container container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active me-2" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link me-2" href="#">Order</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link me-2" href="#">Order Review</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link me-2" href="#">Manage Inventory</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;