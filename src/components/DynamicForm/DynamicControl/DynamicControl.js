import React, { Component } from "react";
import { Form, Input, Icon } from "antd";
import PropTypes from "prop-types";

import ControlSwitcher from "./ControlSwitcher/ControlSwitcher";
import config from "../../LogPages/LoginForm/LoginForm.config";
import defaultRules from "./defaultRules/defaultRules";

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
          change,
          required,
          min,
          max
        } = setting;
        const fieldError = isFieldTouched(id) && getFieldError(id);
        let isRequired = typeof required !== "undefined" ? required : true;
        let fieldRules = [];
        let configRules = rules || [];
        let finalRules = [];
        if (type) {
          fieldRules = defaultRules(type);
          finalRules = fieldRules.concat(configRules);
          if (isRequired) {
            finalRules.push({
              required: true,
              whitespace: true,
              message: "This field is required"
            });
          }
        }

        return (
          id && (
            <FormItem
              key={id}
              label={label}
              colon={false}
              help={fieldError}
              required={required}
              validateStatus={fieldError && "error"}
              hasFeedback={fieldError && true}
              {...this.props.layout}
              {...more}
            >
              {getFieldDecorator(id, {
                initialValue: initialValue,
                rules: finalRules
              })(
                <ControlSwitcher
                  type={type}
                  data={data}
                  placeholder={placeholder}
                  prefix={prefix}
                  suffix={suffix}
                  change={change}
                  min={min}
                  max={max}
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
      change: PropTypes.func,
      required: PropTypes.bool,
      min: PropTypes.number,
      max: PropTypes.number
    })
  ).isRequired
};

export default DynamicControl;
