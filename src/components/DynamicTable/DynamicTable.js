import React, { Component } from 'react';
import { Table, Input } from 'antd';

import DynamicCell from './DynamicCell/DynamicCell';

export default class DynamicTable extends Component {
	render() {
		const rawColumns = this.props.columns;
		const columns = rawColumns.map((e) => ({
			render: (currentValue) => (
				<DynamicCell
					type={e.type}
					editable={e.editable || false}
					data={e.data || currentValue}
					value={currentValue}
				/>
			),
			width: 150,
			...e,
			type: null
		}));
		return (
			<Table
				className="DynamicTable"
				rowSelection={{}}
				bordered={true}
				size="small"
				scroll={{x: 700, y: 500}}
				{...this.props.tableConfig}
				dataSource={this.props.dataSource}
				columns={columns}
			/>
		);
	}
}
