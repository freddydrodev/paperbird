const addCategoryFunc = (name, parent, form) => {
  form.validateFileds((err, res) => {
    if (err) {
      return false;
    }

    form.resetFields();
    return true;
  });
};

const addCategoryConfig = [
  { id: "Name", type: "text", label: "Category Name" },
  { id: "Parent", type: "single", label: "Category Parent" }
];

export { addCategoryConfig, addCategoryFunc };
