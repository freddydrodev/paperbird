import React, { Component } from "react";
import { Form } from "antd";
import PropTypes from "prop-types";

import DynamicControl from "./DynamicControl/DynamicControl";

class DynamicForm extends Component {
  render() {
    const { config, form, layout } = this.props;
    return (
      <Form layout="vertical" {...this.props.settings}>
        <DynamicControl config={config} form={form} layout={layout} />
      </Form>
    );
  }
}

DynamicForm.propTypes = {
  config: PropTypes.array.isRequired,
  layout: PropTypes.object,
  settings: PropTypes.object
};

const wrappedForm = Form.create()(DynamicForm);
export default wrappedForm;
