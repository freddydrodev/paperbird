import React, { Component } from "react";
import { Form, Input, Icon } from "antd";
import PropTypes from "prop-types";

import ControlSwitcher from "./ControlSwitcher/ControlSwitcher";
import config from "../../LogPages/LoginForm/LoginForm.config";
const FormItem = Form.Item;

class DynamicControl extends Component {
  render() {
    const { form, config } = this.props;
    const { isFieldTouched, getFieldError, getFieldDecorator } = form;

    let output = null;

    if (config) {
      output = config.map((setting) => {
        const {
          id,
          label,
          rules,
          initialValue,
          more,
          info,
          type,
          data,
          prefix,
          suffix,
          placeholder,
          change
        } = setting;
        const fieldError = isFieldTouched(id) && getFieldError(id);
        let FieldRules = rules || {};

        return (
          id && (
            <FormItem
              key={id}
              label={label}
              colon={false}
              help={fieldError}
              required={true}
              validateStatus={fieldError && "error"}
              hasFeedback={fieldError && true}
              {...this.props.layout}
              {...more}
            >
              {getFieldDecorator(id, {
                initialValue: initialValue,
                rules: [
                  { required: true, message: "this field is required" },
                  { min: 5, message: "length must be higher than 5" },
                  { max: 15, message: "length must be lower than 15" },
                  { type: "email", message: "not email format" },
                  ...FieldRules
                ]
              })(
                <ControlSwitcher
                  type={type}
                  data={data}
                  placeholder={placeholder}
                  prefix={prefix}
                  suffix={suffix}
                  change={change}
                />
              )}
            </FormItem>
          )
        );
      });
    }
    return output;
  }
}

DynamicControl.propTypes = {
  form: PropTypes.object.isRequired,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        "text",
        "email",
        "password",
        "textarea",
        "number",
        "multiple",
        "single",
        "date",
        "switch",
        "check"
      ]).isRequired,
      initialValue: PropTypes.any,
      label: PropTypes.string,
      placeholder: PropTypes.string,
      rules: PropTypes.arrayOf(PropTypes.object),
      more: PropTypes.object,
      info: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.object,
          PropTypes.string,
          PropTypes.number,
          PropTypes.number
        ])
      ),
      prefix: PropTypes.element,
      suffix: PropTypes.element,
      change: PropTypes.func
    })
  ).isRequired
};

export default DynamicControl;
