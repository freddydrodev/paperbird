import React, { Component } from 'react';
import { Badge, Button, Icon, Avatar } from 'antd';

export default class AccountBottom extends Component {
	render() {
		return (
			<div
				className="AccountBottom fixed-bottom-left bg-main p-3 border-top"
				style={{ backgroundColor: '#F8F8FB', width: 240, height: 170 }}
			>
				<div className="flex between middle">
					<Badge count={5}>
						<Button type="ghost" shape="circle" className="border-0 p-0">
							<Icon type="icon-notification" className="ft-24" />
						</Button>
					</Badge>
					<Badge count={5}>
						<Button type="ghost" shape="circle" className="border-0 p-0">
							<Icon type="icon-messenger" className="ft-24" />
						</Button>
					</Badge>
					<Button type="ghost" shape="circle" className="border-0 p-0">
						<Icon type="icon-settings" className="ft-24" />
					</Button>
					<Button type="ghost" shape="circle" className="border-0 p-0">
						<Icon type="icon-help" className="ft-24" />
					</Button>
				</div>
				<div className="flex py-2 mb-2">
					<Avatar
						shape="square"
						src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						size="large"
					>
						FNB
					</Avatar>
					<div className="ml-2">
						<h4>Deux Autres Person</h4>
						<p className="text-primary small mb-0">Administrator</p>
					</div>
				</div>
				<Button icon="poweroff" type="danger" className="btn-block rounded-0 border-0 border-top">
					Logout
				</Button>
			</div>
		);
	}
}
