import React, { Component } from 'react';

import DynamicTable from '../../components/DynamicTable/DynamicTable';
import config from './columns.config';

const dataSource = [
	{
		name: 'Uncategorized',
		products: 12,
		creationDate: '2018-03-20',
		createdBy: 'Fredius Tout Court',
		color: null,
		option: 'ici',
		key: '_id'
	},
	{
		name: 'tc',
		products: 12,
		creationDate: '2018-03-20',
		createdBy: 'Fredius Tout Court',
		color: 'red',
		option: 'ici',
		key: '_id2'
	}
];

class Categories extends Component {
	render() {
		return <DynamicTable columns={config} dataSource={dataSource} />;
	}
}

export default Categories;
