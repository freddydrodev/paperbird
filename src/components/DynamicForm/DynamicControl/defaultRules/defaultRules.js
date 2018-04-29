const defaultRules = (type) => {
  let rules = [];

  switch (type) {
    case "text":
    case "password":
    case "textarea":
    case "single":
    case "switch":
      rules = [{ type: "string", message: "Must be text(s) " }];
      break;
    case "email":
      rules = [{ type: "email", message: "Must be a valide email address " }];
      break;
    case "number":
      rules = [{ type: "number", message: "Must be number(s) " }];
      break;
    case "multiple":
      rules = [
        {
          type: "array",
          message: "Must be a list of at least 1 value ",
          defaultField: { type: "string" }
        }
      ];
      break;
    case "date":
      rules = [{ type: "date", message: "Must be a date " }];
      break;
    case "check":
      rules = [{ type: "boolean", message: "Must be checked " }];
      break;
    default:
      rules = [];
  }

  return rules;
};

export default defaultRules;
