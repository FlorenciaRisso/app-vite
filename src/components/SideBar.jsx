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
                        <span>Dashboard - DigitalByte</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to='/Productos'>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to='/'>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>20% Off</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to='/'>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to='/'>
                        <i className="fas fa-fw fa-table"></i>
                        <span>Categorias</span>
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
