import Dashboard from '../pages/Dashboard/Dashboard';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const prefix = `/app/`;
const appRoutes = [
	{
		title: `Dashboard`,
		path: `${prefix}Dashboard`,
		component: Dashboard
	},
	{
		title: `PageNotFound`,
		component: PageNotFound
	}
];

export default appRoutes;
