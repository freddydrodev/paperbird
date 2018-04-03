import React from 'react'
import { Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/Dashboard';
import Categories from '../pages/Categories/Categories';
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
