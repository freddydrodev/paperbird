import React, { Component } from 'react';
import { Button, Input, Popover } from 'antd';

import './EditPopup.less';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

export default class TextCell extends Component {
	render() {
		const { value, data, editable } = this.props;

		const content = (
			<Auxiliary>
				<Input placeholder="New Value" className="m-3" style={{width: 220}} />
				<div>
					<Button icon="cross" type="danger" className="w-50 rounded-0 border-0" size="large" />
					<Button icon="check" type="primary" className="w-50 rounded-0 border-0" size="large" />
				</div>
			</Auxiliary>
		);

		return (
			<div className="flex between">
				{value}
				<Popover
					trigger="click"
					content={content}
					placement="bottomRight"
					className="EditPopup"
				>
					<Button icon="edit" shape="circle" type="ghost" className="border-0" />
				</Popover>
			</div>
		);
	}
}
