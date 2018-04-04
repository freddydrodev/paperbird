import React, { Component } from 'react';
import { Button, Popover } from 'antd';

import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import './EditPopup.less';

export default class EditPopup extends Component {
	state = { visible: false, actived: false };

	btnClickHandler = () => {
		let actived = this.state.actived;
		let visible = this.state.visible;

		actived = !actived;
		visible = actived;
		this.setState({ actived, visible });
	};

	submitBtnHandler = () => {
		let ok = true;

		if (ok) {
			this.setState({ actived: false, visible: false });
		}
	};

	render() {
		const content = (
			<Auxiliary>
				{this.props.content}
				<div>
					<Button
						ref={(btn) => (this.editBtn = btn)}
						icon="check"
						type="success"
						className="w-100 rounded-0 border-0"
						size="large"
						onClick={this.submitBtnHandler}
					/>
				</div>
			</Auxiliary>
		);

		const { visible, actived } = this.state;
		const classNames = `${actived && ' active'}`;
		return (
			<div className="flex between middle EditPopup">
				{this.props.children}
				<Popover visible={visible} trigger="click" content={content} placement="bottomRight">
					<Button
						icon="edit"
						shape="circle"
						type="ghost"
						className={classNames}
						onClick={this.btnClickHandler}
					/>
				</Popover>
			</div>
		);
	}
}
