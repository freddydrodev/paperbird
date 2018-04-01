import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import PasswordForget from '../pages/PasswordForget/PasswordForget';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const logRoutes = [
	{
		title: `PasswordForget`,
		path: `/PasswordForget`,
		component: PasswordForget
	},
	{
		title: `Registration`,
		path: `/Registration`,
		component: Registration
	},
	{
		title: `Login`,
		path: `/`,
		component: Login,
		exact: true
	},
	{
		title: `PageNotFound`,
		component: PageNotFound
	}
];

export default logRoutes;
