import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

import './Summary.less'

export default class Summary extends Component {
	render() {
		return (
			<Row gutter={16}>
				<Col span={8}>
					<Card title="Total Sales" bordered={false} className="Summary sales">
						<p>okok</p>
						<p>okok</p>
						<p>okok</p>
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Total Orders" bordered={false} className="Summary orders">
						<p>okok</p>
						<p>okok</p>
						<p>okok</p>
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Total Clients" bordered={false} className="Summary clients">
						<p>okok</p>
						<p>okok</p>
						<p>okok</p>
					</Card>
				</Col>
			</Row>
		);
	}
}
