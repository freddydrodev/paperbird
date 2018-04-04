import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

import TextCell from './TextCell/TextCell.js';
import NumberCell from './NumberCell/NumberCell.js';
import SingleCell from './SingleCell/SingleCell.js';
import MultiCell from './MultiCell/MultiCell.js';
import DateCell from './DateCell/DateCell.js';

export default class DynamicCell extends Component {
	render() {
		const { value, editable, data, type } = this.props;
		let output = value || '';

		if (editable) {
			switch (type) {
				case 'text':
				default:
					output = <TextCell editable={editable} data={data} value={value} />;
					break;
				case 'number':
					output = <NumberCell editable={editable} data={data} value={value} />;
					break;
				case 'single':
					output = <SingleCell editable={editable} data={data} value={value} />;
					break;
				case 'multi':
					output = <MultiCell editable={editable} data={data} value={value} />;
					break;
				case 'date':
					output = <DateCell editable={editable} data={data} value={value} />;
					break;
			}
		}

		return <Auxiliary>{output}</Auxiliary>;
	}
}
