import React from 'react';
import LastMovieInDb from './LastMovieInDb'
import ContentRowMovies from './ContentRowMovies';
function ContentRowTop() {

	let listado = [{
		titulo: "Total de productos", colorBorde: "danger", cifra: 21, icono: "box-open"
	},
	{
		titulo: "Total de usuarios", colorBorde: "primary", cifra: 79, icono: "user"
	},{
		titulo: "Total de categorias", colorBorde: "warning", cifra: 49, icono: "layer-group"
	}]
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid mt-3">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Digital Byte Dashboard</h1>
				</div>
				<ContentRowMovies lista={listado}/>
				<LastMovieInDb />
			</div>
			{/*<!--End Content Row Top-->*/}
		</React.Fragment>
	)

}
export default ContentRowTop;