import React, { Component } from 'react';
import { Icon, Input } from 'antd';

const { Search } = Input;

export default class LogoSearch extends Component {
	render() {
		return (
			<div className="p-3">
				<h3 className="flex middle logo center py-3">
					<Icon type="flaticon-origami-bird" style={{ fontSize: 32 }} className="mr-1" />
					PaperBird
				</h3>
				<Search placeholder="What are looking for?" />
			</div>
		);
	}
}
