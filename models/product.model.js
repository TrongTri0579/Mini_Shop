const db = require("../utils/db");
const TBL_PRODUCTS = "products";

module.exports = {
  all: () => {
    return db.load(`select * from ${TBL_PRODUCTS}`);
  },
  single: (id) => {
    return db.load(`select * from ${TBL_PRODUCTS} where ProID = ${id}`);
  },

  add: (entity) => {
    return db.add(TBL_PRODUCTS, entity);
  },

  patch: (entity) => {
    const condition = {
      ID: entity.ProID,
    };
    delete entity.ProID;
    return db.patch(TBL_PRODUCTS, entity, condition);
  },

  del: function (id) {
    const condition = {
      ProID: id,
    };
    return db.del(TBL_PRODUCTS, condition).then((result) => {
      return result.affectedRows > 0;
    });
  },
};
