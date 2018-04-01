import React, { Component } from 'react';
import { Layout, Icon, Menu, Input } from 'antd';

import config from './menu.config.js';
import Dashboard from '../../../pages/Dashboard/Dashboard';

const roro = () => 'ixi';
const { Sider } = Layout;
const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;
const { Search } = Input;
class AppSider extends Component {
	render() {
		return (
			<Sider width={250} className="vh-100">
				<div className="p-2">
					<h3 className="flex middle">
						<Icon type="flaticon-origami-bird" style={{ fontSize: 32 }} className="mr-1" />
						PaperBird
					</h3>
					<Search />
				</div>
				<Menu>
					<MenuItemGroup title="Main" key="main">
						<MenuItem key="dashboard">Dashboard</MenuItem>
					</MenuItemGroup>
				</Menu>
			</Sider>
		);
	}
}

export default AppSider;
