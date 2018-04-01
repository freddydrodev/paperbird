import AppWrapper from '../containers/AppWrapper/AppWrapper';
import LogWrapper from '../containers/LogWrapper/LogWrapper';

const mainRoutes = [
	{
		title: `AppWrapper`,
		path: `/app/`,
		component: AppWrapper
	},
	{
		title: `LogWrapper`,
		path: `*`,
		component: LogWrapper
	}
];

export default mainRoutes;
