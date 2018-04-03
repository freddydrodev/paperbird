import React, { Component } from 'react';
import { Icon, Input } from 'antd';

import './LogoSearch.less';

const { Search } = Input;

export default class LogoSearch extends Component {
	render() {
		return (
			<div className="LogoSearch">
				<h3 className="flex middle logo center py-3">
					<Icon type="flaticon-origami-bird" style={{ fontSize: 32 }} className="mr-1" />
					PaperFly
				</h3>
				<Search placeholder="What are looking for?" />
			</div>
		);
	}
}
