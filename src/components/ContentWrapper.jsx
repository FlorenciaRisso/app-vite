import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Tabla from './Tabla';
import Footer from './Footer';
function ContentWrapper(){
    
    const columnas = ['Titulo', 'Duracion', 'Rating','Genero','Premios'];
    const datosTabla = [
        ['Billi Elliot', 123,5, ['Drama','Comedia'],2],
        ['Alicia en el pais de las maravillas', 142,4.8, ['Drama','Accion','Comedia'],3]
    ];
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;