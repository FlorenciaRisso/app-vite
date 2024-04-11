import React from 'react';
import SideBar from './SideBar';
import '../assets/css/App.css';
import ContentWrapper from './ContentWrapper';
import Productos from './Productos/Productos';
import ProductosDetail from './Productos/ProductosDetail';
import Discount from './Productos/Discount';
import Usuarios from './Usuarios/Users'
import UsuariosDetail from './Usuarios/UsuariosDetail'
import Categorias from './Categorias/Categorias';
import CategoriasDetail from './Categorias/CardList';
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <Switch>
          <Route path="/" exact={true} component={ContentWrapper} />
          <Route path="/Productos" exact={true} component={Productos} />
          <Route path="/Productos/:id" exact={true} component={ProductosDetail} />
          <Route path="/Discount" exact={true} component={Discount} />
          <Route path="/Usuarios" exact={true} component={Usuarios} />
          <Route path="/Usuarios/:id" exact={true} component={UsuariosDetail} />
          <Route path="/Categorias" exact={true} component={Categorias} />
          <Route path="/Categorias/:id" component={Categorias} />
        </Switch>
      </div>
    </>
  );
}

export default App;
