import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-color" >
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand fw-bolder text-primary" href="#">Quiz-Corner</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <div className="d-flex justify-content-between link-btn">
                            <Link className='btn me-4 fw-bold' to='/'>Topics</Link>
                            <Link className='btn  me-4 fw-bold' to='/statistics'>Statistics</Link>
                            <Link className='btn me-4 fw-bold' to='/blog'> Blog</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;