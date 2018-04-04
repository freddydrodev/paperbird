import React from 'react';
import { Icon, Button, Input, Popover } from 'antd';
import { withRouter } from 'react-router-dom';

import './AppHeader.less';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const { Search } = Input;

const AppHeader = (props) => {
	const pathname = props.location.pathname;
	const pathAr = pathname.split('/');
	const location = pathAr[pathAr.length - 1];

	return (
		<Auxiliary>
			<div className="AppHeader flex py-3 middle mb-3">
				<Icon type={`icon-${location}`} style={{ fontSize: 36 }} className="text-primary" />
				<h1 className="ml-3 mb-0 capitalize relative">{location}</h1>
			</div>
			{(location === 'shops' ||
				location === 'tags' ||
				location === 'categories' ||
				location === 'products' ||
				location === 'customers' ||
				location === 'employees' ||
				location === 'orders' ||
				location === 'sales') && (
				<Auxiliary>
					<div className="flex py-3 middle">
						<Popover content="okok" trigger="click" title={`Add new in ${location}`} placement="bottomLeft">
							<Button icon="plus" type="primary" className="mr-3" />
						</Popover>
						<Search placeholder={`Search in ${location}`} className="shadow-input" />
					</div>
					<p className="mb-3 small">
						<strong>Result: </strong> 200 Found, <strong>Showing: </strong> 0-25
					</p>
				</Auxiliary>
			)}
		</Auxiliary>
	);
};

export default withRouter(AppHeader);
