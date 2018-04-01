import React, { Component } from 'react';
import { Layout } from 'antd';

import MenuLeft from './MenuLeft/MenuLeft';
import LogoSearch from './LogoSearch/LogoSearch';
import AccountBottom from './AccountBottom/AccountBottom';

const { Sider } = Layout;

class AppSider extends Component {
	render() {
		return (
			<Sider width={240} className="vh-100">
				<LogoSearch />
				<MenuLeft />
				<AccountBottom />
			</Sider>
		);
	}
}

export default AppSider;
