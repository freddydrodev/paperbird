import React, { Component } from 'react';
import { Form, Input, Icon } from 'antd';

const FormItem = Form.Item;

class DynamicForm extends Component {
	state = {
		extra: <p>I am an extra message</p>
	};

	render() {
		const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form;
		const userNameError = isFieldTouched('userName') && getFieldError('userName');

		console.log(getFieldError('userName'));

		return (
			<Form layout="vertical" style={{ width: '90%' }} hideRequiredMark={false}>
				<FormItem
					label="Your username"
					colon={false}
					extra={this.state.extra}
					help={userNameError || ''}
					required={true}
					validateStatus={userNameError && 'error'}
					hasFeedback={userNameError && true}
				>
					{getFieldDecorator('userName', {
						rules: [
							{ required: true, message: 'this field is required' },
							{ min: 5, message: 'length must be higher than 5' },
							{ max: 15, message: 'length must be lower than 15' },
							{ type: 'email', message: 'not email format' }
						]
					})(<Input prefix={<Icon type="user" />} placeholder="username" />)}
				</FormItem>
			</Form>
		);
	}
	componentDidMount() {
		let _extra = this.state.extra;
		_extra = <p>I am an new extra message</p>;
		setTimeout(() => {
			this.setState({
				extra: _extra
			});
		}, 3000);
	}
}

export default Form.create()(DynamicForm);
