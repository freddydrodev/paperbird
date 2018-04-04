import React, { Component } from 'react';
import { InputNumber } from 'antd';

import EditPopup from '../EditPopup/EditPopup';

export default class NumberCell extends Component {
	render() {
		const { value, editable } = this.props;

		if (editable) {
			const content = (
				<InputNumber
					min={0}
					size="large"
					placeholder="New Value"
					className="rounded-0 border-0 border-bottom no-shadow"
					style={{ width: 240 }}
				/>
			);

			return <EditPopup content={content}>{value}</EditPopup>;
		}

		return value;
	}
}
