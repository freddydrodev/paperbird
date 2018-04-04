import React, { Component } from 'react';
import { Button, Popover } from 'antd';

import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import './EditPopup.less';

export default class EditPopup extends Component {
	render() {
		const content = (
			<Auxiliary>
				{this.props.content}
				{this.props.submit && (
					<div>
						<Button icon="check" type="success" className="w-100 rounded-0 border-0" size="large" />
					</div>
				)}
			</Auxiliary>
		);
		return (
			<div className="flex between EditPopup">
				{this.props.children}
				<Popover trigger="click" content={content} placement="bottomRight">
					<Button icon="edit" shape="circle" type="ghost" className="border-0" />
				</Popover>
			</div>
		);
	}
}
