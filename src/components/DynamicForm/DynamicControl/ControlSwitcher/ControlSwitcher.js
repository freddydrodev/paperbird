import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Input,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  Checkbox
  //   Radio,
  //   Cascader,
  //   Slider,
  // Icon
} from "antd";

const { Option } = Select;

export default class ControlSwitcher extends Component {
  render() {
    const { data, type, prefix, suffix, placeholder, change } = this.props;
    let ctrl = null;

    switch (type) {
      case "text":
      case "email":
      case "password":
      case "textarea":
        ctrl = (
          <Input
            type={type}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            onChange={change}
            {...this.props}
          />
        );
        break;
      case "number":
        ctrl = (
          <InputNumber
            placeholder={placeholder}
            min={0}
            onChange={change}
            {...this.props}
            type={null}
            className="w-100"
          />
        );
        break;
      case "multiple":
      case "single":
        ctrl = (
          <Select
            mode={type === "multiple" ? type : "default"}
            onChange={change}
            showSearch
            {...this.props}
          >
            {data &&
              data.map((opt) => (
                <Option key={opt.value} value={opt.value}>
                  {opt.text}
                </Option>
              ))}
          </Select>
        );
        break;
      case "date":
        ctrl = (
          <DatePicker
            placeholder={placeholder}
            onChange={change}
            {...this.props}
          />
        );
        break;
      case "switch":
        ctrl = (
          <Switch
            unCheckedChildren={data[0]}
            checkedChildren={data[1]}
            onChange={change}
            {...this.props}
          />
        );
        break;
      case "check":
        ctrl = (
          <Checkbox onChange={change} {...this.props}>
            {placeholder}
          </Checkbox>
        );
        break;
      default:
        ctrl = null;
    }

    return ctrl;
  }
}

ControlSwitcher.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number])
  ),
  type: PropTypes.string.isRequired,
  prefix: PropTypes.element,
  suffix: PropTypes.element,
  placeholder: PropTypes.string,
  change: PropTypes.func
};
