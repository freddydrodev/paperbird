const config = [
	{
		main: [
			{
				to: 'dashboard',
				exact: false,
				text: 'dashboard'
			},
			{
				to: 'shops',
				exact: false,
				text: 'shops'
			},
			{
				to: 'categories',
				exact: false,
				text: 'categories'
			},
			{
				to: 'products',
				exact: false,
				text: 'products'
			},
			{
				to: 'tags',
				exact: false,
				text: 'tags'
			}
		]
	},
	{
		users: [
			{
				to: 'customers',
				exact: false,
				text: 'customers'
			},
			{
				to: 'employees',
				exact: false,
				text: 'employees'
			}
		]
	},
	{
		activities: [
			{
				to: 'orders',
				exact: false,
				text: 'orders'
			},
			{
				to: 'sales',
				exact: false,
				text: 'sales'
			},
			{
				to: 'deliveries',
				exact: false,
				text: 'deliveries'
			}
		]
	}
];

/*,
    tools: [
        {
            to: 'calculator',
            exact: false,
            text: 'calculator'
        },
        {
            to: 'sales',
            exact: false,
            text: 'sales'
        },
        {
            to: 'deliveries',
            exact: false,
            text: 'deliveries'
        },
    ]
    */

export default config;
