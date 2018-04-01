import React, { Component } from 'react';
import { Layout } from 'antd';

// import config from './LoginForm.config'
import DynamicForm from '../../DynamicForm/DynamicForm';

const { Content } = Layout;

class LoginForm extends Component {
	render() {
		return (
			<Content>
				<DynamicForm />
				{/* {config.map((inp, i) => <input type="text" key={i} />)} */}
			</Content>
		);
	}
}

export default LoginForm;
