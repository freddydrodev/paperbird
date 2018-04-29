const validateNumber = (rule, value, callback) => {
  if (value.toString().trim().length < 0) {
    callback(`this field is required`);
  }
  callback();
}

const addProducts = [
  { id: "Serial", type: "text", label: "Product Serial" },
  { id: "Name", type: "text", label: "Product Name" },
  {
    id: "Category",
    type: "single",
    label: "Product Category",
    required: false
  },
  {
    id: "Price",
    type: "number",
    label: "Product Price",
    initialValue: 1,
    required: false,
    min: 1,
  },
  {
    id: "Unit",
    type: "number",
    label: "Product Unit",
    initialValue: 1,
    required: false,
    min: 1,
  },
  {
    id: "Quantity",
    type: "number",
    label: "Product Quantity",
    initialValue: 1,
    required: false,
    min: 1,
  }
];

export default addProducts;
