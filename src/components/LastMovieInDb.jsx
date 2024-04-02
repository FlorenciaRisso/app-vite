import GenresInDb from "./GenresInDb";
import imagenFondo from '../assets/images/redmiPadSE-1.png'

function LastMovieInDb() {
    return (
        <div className="row">
            {/*<!-- Last Movie in DB -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ maxWidth: 20 + 'rem' }} src={imagenFondo} alt=" Xiaomi padSE " />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver Detalle</a>
                    </div>
                </div>
            </div>
            {/*<!-- End content row Ultimo producto creado -->*/}
            <GenresInDb/>
        </div>
    )
}
export default LastMovieInDb;