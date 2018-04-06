import React, { Component } from "react";

import DynamicTable from "../../components/DynamicTable/DynamicTable";
import config from "./columns.config";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import { addCategoryFunc, addCategoryConfig } from "./addCategory";
import ModalAndSearch from "../../components/App/ModalAndSearch/ModalAndSearch";

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
        <ModalAndSearch add={addCategoryFunc} content={<DynamicForm config={addCategoryConfig} />} placeholder="Search in categories" />
        <DynamicTable columns={config} dataSource={dataSource} />;
      </div>;
  }
}

export default Categories;
