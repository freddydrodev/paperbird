import React, { Component } from "react";
import { message } from "antd";

import DynamicTable from "../../components/DynamicTable/DynamicTable";
import config from "./columns.config";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import addProducts from "./addProducts";
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
    createdBy: "Fredius Tout",
    color: "red",
    option: "ici",
    key: "_id2"
  }
];

class Products extends Component {
  render() {
    return (
      <div>
        <ModalAndSearch
          title="Add Product"
          add={this.addProductHandler}
          content={
            <DynamicForm
              wrappedComponentRef={(formRef) => (this.formRef = formRef)}
              config={addProducts}
            />
          }
          placeholder="Search in Products"
        />
        <DynamicTable columns={config} dataSource={dataSource} />;
      </div>
    );
  }
  addProductHandler = () => {
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

export default Products;
