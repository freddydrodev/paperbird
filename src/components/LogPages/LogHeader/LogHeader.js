import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

class LogHeader extends Component {
	render() {
		return (
			<Header className="p-0 bg-transparent">
				<p className="logoTop">
					<Icon type="flaticon-origami-bird" />Logo
					<Icon type="smile" />
				</p>
				<ul>
					<li>
						<NavLink to="/" exact>
							<span className="flaticon-origami" />Login
						</NavLink>
					</li>
					<li>
						<NavLink to="/registration">Registration</NavLink>
					</li>
				</ul>
			</Header>
		);
	}
}

export default LogHeader;
