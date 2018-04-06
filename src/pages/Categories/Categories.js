import React, { Component } from "react";
import { message } from "antd";

import DynamicTable from "../../components/DynamicTable/DynamicTable";
import config from "./columns.config";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import addCategoryConfig from "./addCategory";
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
    return (
      <div>
        <ModalAndSearch
          add={this.addCategoryHandler}
          content={
            <DynamicForm
              wrappedComponentRef={(formRef) => (this.formRef = formRef)}
              config={addCategoryConfig}
            />
          }
          placeholder="Search in categories"
        />
        <DynamicTable columns={config} dataSource={dataSource} />;
      </div>
    );
  }

  addCategoryHandler = () => {
    if (this.formRef) {
      const { form } = this.formRef.props;

      form.validateFields((err, res) => {
        if (err) {
          return false;
        }
        message.success(`value added is ${res.Name}`, 2);
        console.log(res);
        return true;
      });
    }
  };
}

export default Categories;
