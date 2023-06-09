const db = require("../utils/db");
const TBL_CATEGORIES = "categories";

module.exports = {
  all: () => {
    return db.load(`select * from ${TBL_CATEGORIES}`);
  },
  single: (id) => {
    return db.load(`select * from ${TBL_CATEGORIES} where catID = ${id}`);
  },
};
