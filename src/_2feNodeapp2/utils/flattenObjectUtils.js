const flattenObject = (obj, parent = "", res = {}) => {
  for (let key in obj) {
    const propName = parent ? parent + "." + key : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};

export default flattenObject;
