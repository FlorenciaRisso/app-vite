import React from 'react';
import SideBar from './SideBar';
import '../assets/css/App.css';
import ContentWrapper from './ContentWrapper';
import Productos from './Productos/Productos';
import ProductosDetail from './Productos/ProductosDetail';
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
        </Switch>
      </div>
    </>
  );
}

export default App;
