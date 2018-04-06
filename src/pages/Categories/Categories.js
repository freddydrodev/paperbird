import React, { Component } from "react";
import { Icon, Input } from "antd";

import DynamicTable from "../../components/DynamicTable/DynamicTable";
import config from "./columns.config";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import AddModal from "../../components/App/AddModal/AddModal";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import { addCategoryFunc, addCategoryConfig } from "./addCategory";

const { Search } = Input;
const dataSource = [
  {
    name: "Uncategorized",
    products: 12,
    creationDate: "2018-03-20",
    createdBy: "Fredius Tout Court",
    color: null,
    option: "ici",
    key: "_id"
  },
  {
    name: "tc",
    products: 12,
    creationDate: "2018-03-20",
    createdBy: "Fredius Tout Court",
    color: "red",
    option: "ici",
    key: "_id2"
  }
];

class Categories extends Component {
  render() {
    return <div>
        <div className="flex py-3 middle">
          <AddModal title="Add Category">
            <DynamicForm config={addCategoryConfig} />
          </AddModal>
          <Search placeholder={`Search in categories`} className="shadow-input" />
        </div>
        <p className="mb-3 small">
          <strong>Result: </strong> 200 Found, <strong>Showing: </strong> 0-25
        </p>
        <DynamicTable columns={config} dataSource={dataSource} />;
      </div>;
  }
}

export default Categories;
