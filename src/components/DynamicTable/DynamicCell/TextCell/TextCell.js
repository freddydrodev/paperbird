import React, { Component } from 'react';
import { Input } from 'antd';

import EditPopup from '../EditPopup/EditPopup';

export default class TextCell extends Component {
	render() {
		const { value, editable } = this.props;

		if (editable) {
			const content = (
				<Input
					placeholder="New Value"
					className="rounded-0 border-0 border-bottom"
					size="large"
					style={{ width: 240 }}
				/>
			);

			return <EditPopup content={content}>{value}</EditPopup>;
		}

		return value;
	}
}
