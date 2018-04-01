import React from 'react';
import { Icon } from 'antd';
import { withRouter } from 'react-router-dom';

import './AppHeader.less';

const AppHeader = (props) => {
	const pathname = props.location.pathname;
	const pathAr = pathname.split('/');
	const location = pathAr[pathAr.length - 1];

	return (
		<div className="AppHeader flex py-3 middle mb-3">
			<Icon type={`icon-${location}`} style={{ fontSize: 36 }} className="text-primary" />
			<h1 className="ml-3 mb-0 capitalize relative">{location}</h1>
		</div>
	);
};

export default withRouter(AppHeader);
