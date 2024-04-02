import React from 'react';
import image from '../assets/images/logo-dbytee.png';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <li className="nav-item sidebar-brand d-flex align-items-center justify-content-center">
                    <Link className="nav-link" to="/">
                        <img className="w-100" src={image} alt="Digital House" />
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to='/LastMovieInDb'>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Last Movie</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to='/ContentRowMovies'>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Movies</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to='/GenresInDb'>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Genres</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}
        </React.Fragment>
    )
}

export default SideBar;
