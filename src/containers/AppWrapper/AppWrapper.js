import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import AppRoutes from '../../routes/AppRoutes';
import AppSider from '../../components/App/AppSider/AppSider';
import AppHeader from '../../components/App/AppHeader/AppHeader';

				
const { Content } = Layout;

class AppWrapper extends Component {
	render() {
		return <Layout>
				<AppSider />
				<Content className="px-3">
					<AppHeader />
					<Switch>
						{AppRoutes.map((settings) => <Route key={settings.title} {...settings} />)}
					</Switch>
				</Content>
			</Layout>;
	}
}

export default AppWrapper;
