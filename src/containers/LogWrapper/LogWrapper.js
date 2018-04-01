import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

import LogRoutes from '../../routes/LogRoutes';
import LogHeader from '../../components/LogPages/LogHeader/LogHeader';
import LogPresentation from '../../components/LogPages/LogPresentation/LogPresentation';

const Content = Layout;

class LogWrapper extends Component {
	render() {
		return (
			<Layout className="vh-100">
				<LogHeader />
				<Layout className="h-100">
					<Content className="h-100">
						<Row type="flex" align="center" className="h-100">
							<Col span={16}>
								<LogPresentation />
							</Col>
							<Col span={8}>
								<Switch>
									{LogRoutes.map((settings) => <Route key={settings.title} {...settings} />)}
								</Switch>
							</Col>
						</Row>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default LogWrapper;
