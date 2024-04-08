import React from 'react';
import LastProduct from './LastProduct'
import ContentRow from './ContentRow';
function ContentRowTop() {

	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid mt-3">
				<div className="d-sm-flex aligns-items-center justify-content-center mb-4">
					<h1 className="h3 mb-0 text-gray-800">DigitalByte Dashboard</h1>
				</div>
				<ContentRow />
				<LastProduct />
			</div>
			{/*<!--End Content Row Top-->*/}
		</React.Fragment>
	)

}
export default ContentRowTop;