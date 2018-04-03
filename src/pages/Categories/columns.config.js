const columns = [
	{ dataIndex: 'name', key: 'name', title: 'Name', editable: true, type: 'text' },
	{ dataIndex: 'products', key: 'products', title: 'Products', editable: true, type: 'number' },
	{ dataIndex: 'creationDate', key: 'creationDate', title: 'Creation Date', editable: true, type: 'date' },
	{ dataIndex: 'createdBy', key: 'createdBy', title: 'Created By', editable: true, type: 'text' },
	{ dataIndex: 'color', key: 'color', title: 'Color', render: (data) => data || 'Not selected' },
	{ dataIndex: 'option', key: 'option', title: 'Option' }
];

export default columns;
