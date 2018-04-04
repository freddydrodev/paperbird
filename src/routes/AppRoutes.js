import React from 'react'
import { Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/Dashboard';
import Categories from '../pages/Categories/Categories';
import Products from '../pages/Products/Products';
import Tags from '../pages/Tags/Tags';
import Customers from '../pages/Customers/Customers';
import Employees from '../pages/Employees/Employees';
import Orders from '../pages/Orders/Orders';
import Sales from '../pages/Sales/Sales';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const prefix = `/app/`;
const appRoutes = [
	{
		title: `Dashboard`,
		path: `${prefix}Dashboard`,
		component: Dashboard,
		exact: true
	},
	{
		title: `Categories`,
		path: `${prefix}Categories`,
		component: Categories,
		exact: true
	},
	{
		title: `Products`,
		path: `${prefix}Products`,
		component: Products,
		exact: true
	},
	{
		title: `Tags`,
		path: `${prefix}Tags`,
		component: Tags,
		exact: true
	},
	{
		title: `Customers`,
		path: `${prefix}Customers`,
		component: Customers,
		exact: true
	},
	{
		title: `Employees`,
		path: `${prefix}Employees`,
		component: Employees,
		exact: true
	},
	{
		title: `Orders`,
		path: `${prefix}Orders`,
		component: Orders,
		exact: true
	},
	{
		title: `Sales`,
		path: `${prefix}Sales`,
		component: Sales,
		exact: true
	},
	{
		title: `App`,
		path: `${prefix}`,
		component: () => <Redirect to="/app/dashboard" />,
		exact: true
	},
	{
		title: `PageNotFound`,
		component: PageNotFound
	}
];

export default appRoutes;
