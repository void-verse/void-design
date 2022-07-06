type types = "number" | "string" | "object" | "array" | "undefined" | "null";

const getType = (fieldValue: any): types => {
  return Object.prototype.toString
    .call(fieldValue)
    .replace("[", "")
    .replace("]", "")
    .split(" ")[1]
    .toLowerCase();
};

export default getType;
