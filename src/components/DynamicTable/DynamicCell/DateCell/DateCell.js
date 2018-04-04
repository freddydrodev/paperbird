import React, { Component } from 'react';
import { DatePicker } from 'antd';

import EditPopup from '../EditPopup/EditPopup';

export default class DateCell extends Component {
	render() {
		const { value, editable } = this.props;

		if (editable) {
			const content = (
				<DatePicker
					style={{ width: 240 }}
					placeholder="choose a date"
					className="editDate"
					size="large"
				/>
			);

			return <EditPopup content={content}>{value}</EditPopup>;
		}

		return value;
	}
}
