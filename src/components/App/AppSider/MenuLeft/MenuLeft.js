import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';

import config from './menu.config.js';
import './MenuLeft.less';

const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;

export default class MenuLeft extends Component {
	render() {
		return (
			<Menu className="MenuLeft">
				{config.map((setting, index) => {
					const itemGroupKey = Object.keys(setting);
					const items = setting[itemGroupKey].map((item) => {
						const prefix = '/app/';
						const isActive = (match, location) => location.pathname === `${prefix}${item.to}`;

						return (
							<MenuItem key={item.text}>
								<NavLink to={item.to} exact={item.exact} isActive={isActive} className="flex middle">
									<Icon type={`icon-${item.text}`} />
									{item.text}
								</NavLink>
							</MenuItem>
						);
					});

					return (
						<MenuItemGroup title={itemGroupKey} key={itemGroupKey}>
							{items}
						</MenuItemGroup>
					);
				})}
			</Menu>
		);
	}

	componentDidMount() {
		this.ps = new PerfectScrollbar('.MenuLeft', { suppressScrollX: true });
	}
}
