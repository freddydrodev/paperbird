import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Summary from '../../components/Dashboard/Summary/Summary'

class Dashboard extends Component {
	render() {
		return (
			<Auxiliary>
				<Summary />
			</Auxiliary>
		);
	}
}

export default Dashboard;
