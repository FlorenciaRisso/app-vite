import PropTypes from 'prop-types';

function ContentRowMovies(props) {
    return (
        <div className="row">
            {props.lista.map(e => {
                return (
                    <div className="col-md-4 mb-4" key={e.id}>
                        <div className={`card border-left-${e.colorBorde} shadow h-100 py-2`}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className={`text-xs font-weight-bold text-${e.colorBorde} text-uppercase mb-1`}>{e.titulo}</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{e.cifra}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className={`fas fa-${e.icono} fa-2x text-gray-300`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
ContentRowMovies.propTypes = PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      colorBorde: PropTypes.string.isRequired,
      cifra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icono: PropTypes.oneOf(['film', 'award', 'user']).isRequired
    })
  );

export default ContentRowMovies;