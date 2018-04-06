import React, { Component } from "react";
import { Modal, Button, Tooltip } from "antd";
import PropTypes from "prop-types";

import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

export default class AddModal extends Component {
  state = { visible: false };

  visiblityHandler = () => {
    let visible = this.state.visible;
    visible = !visible;

    this.setState({ visible });
  };
  
  render() {
    const { title, add } = this.props;

    return (
      <Auxiliary>
        <Modal
          title={title}
          visible={this.state.visible}
          onCancel={this.visiblityHandler}
          onOk={add}
        >
          {this.props.children}
        </Modal>
        <Tooltip title={title} placement="bottom">
          <Button
            icon="plus"
            type="primary"
            className="mr-3"
            onClick={this.visiblityHandler}
          />
        </Tooltip>
      </Auxiliary>
    );
  }
}

AddModal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // submit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  add: PropTypes.func.isRequired
};
