const columns = [
	{ dataIndex: 'id', key: 'id', title: 'Unique/ID' },
	{ dataIndex: 'name', key: 'name', title: 'Customer Name', editable: true, type: 'text' },
	{ dataIndex: 'contact', key: 'contact', title: 'Customer Contact', editable: true, type: 'phone' },
	{ dataIndex: 'addess', key: 'addess', title: 'Customer Address', editable: true, type: 'single' },
	{ dataIndex: 'totalPrice', key: 'totalPrice', title: 'Total Price' },
	{ dataIndex: 'products', key: 'products', title: 'Products' },
	{ dataIndex: 'delivery', key: 'delivery', title: 'Delivery', editable: true, type: 'date', render: data => data || 'none' },
	{ dataIndex: 'creationDate', key: 'creationDate', title: 'Made On' },
	{ dataIndex: 'CreatedBy', key: 'CreatedBy', title: 'Made By' },
	{ dataIndex: 'option', key: 'option', title: 'Option' }
];

export default columns;
