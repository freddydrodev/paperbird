import React, { Component } from 'react';
import { Select } from 'antd';

import EditPopup from '../EditPopup/EditPopup';

const { Option } = Select;

export default class SingleCell extends Component {
	render() {
		const { value, editable } = this.props;

		if (editable) {
			const content = (
				<Select className="editSelect" style={{ width: 240 }} size="large" defaultValue="ok" showSearch>
					<Option value="ok">ok</Option>
					<Option value="ok2">ok2</Option>
				</Select>
			);

			return <EditPopup content={content}>{value}</EditPopup>;
		}

		return value;
	}
}
