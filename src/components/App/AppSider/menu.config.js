const config = {
	main: [
		{
			to: 'dashboard',
			exact: true,
			text: 'dashboard'
		},
		{
			to: 'shops',
			exact: true,
			text: 'shops'
		},
		{
			to: 'categories',
			exact: true,
			text: 'categories'
		},
		{
			to: 'products',
			exact: true,
			text: 'products'
		},
		{
			to: 'tags',
			exact: true,
			text: 'tags'
		}
	],
	users: [
		{
			to: 'customers',
			exact: true,
			text: 'customers'
		},
		{
			to: 'employees',
			exact: true,
			text: 'employees'
		}
	],
	activities: [
		{
			to: 'orders',
			exact: true,
			text: 'orders'
		},
		{
			to: 'sales',
			exact: true,
			text: 'sales'
		},
		{
			to: 'deliveries',
			exact: true,
			text: 'deliveries'
		}
	]
	/*,
    tools: [
        {
            to: 'calculator',
            exact: true,
            text: 'calculator'
        },
        {
            to: 'sales',
            exact: true,
            text: 'sales'
        },
        {
            to: 'deliveries',
            exact: true,
            text: 'deliveries'
        },
    ]
    */
};

export default config;
