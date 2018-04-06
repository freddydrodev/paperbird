import React, { Component } from "react";
import { Input } from "antd";

import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import AddModal from "../AddModal/AddModal";

const { Search } = Input;

class ModalAndSearch extends Component {
  render() {
    const { content, placeholder } = this.props;

    return (
      <Auxiliary>
        <div className="flex py-3 middle">
          <AddModal title="Add Category">{content}</AddModal>
          <Search
            placeholder={placeholder}
            className="shadow-input"
          />
        </div>
        <p className="mb-3 small">
          <strong>Result: </strong> 200 Found, <strong>Showing: </strong> 0-25
        </p>
      </Auxiliary>
    );
  }
}

export default ModalAndSearch;
