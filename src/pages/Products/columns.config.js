const columns = [
	{ dataIndex: 'image', key: 'image', title: 'Image', render: (data) => data || 'will display img' },
	{ dataIndex: 'id', key: 'id', title: 'Unique/ID' },
	{ dataIndex: 'name', key: 'name', title: 'Name', editable: true, type: 'text' },
	{ dataIndex: 'category', key: 'category', title: 'Category', editable: true, type: 'single' },
	{ dataIndex: 'price', key: 'price', title: 'Price', editable: true, type: 'number' },
	{ dataIndex: 'unit', key: 'unit', title: 'Unit', editable: true, type: 'number' },
	{ dataIndex: 'quantity', key: 'quantity', title: 'Quantity', editable: true, type: 'number' },
	{ dataIndex: 'creationDate', key: 'creationDate', title: 'Creation Date'},
	{ dataIndex: 'CreatedBy', key: 'CreatedBy', title: 'Created By'},
	{ dataIndex: 'option', key: 'option', title: 'Option' }
];

export default columns;
