const db = require("../utils/db");
const TBL_EMPLOYEES = "employees";

module.exports = {
  all: () => {
    return db.load(`select * from ${TBL_EMPLOYEES}`);
  },
  single: (id) => {
    return db.load(`select * from ${TBL_EMPLOYEES} where ID = ${id}`);
  },

  add: (entity) => {
    return db.add(TBL_EMPLOYEES, entity);
  },

  patch: (entity) => {
    const condition = {
      ID: entity.ID,
    };
    delete entity.ID;
    return db.patch(TBL_EMPLOYEES, entity, condition);
  },

  del: function (id) {
    const condition = {
      ID: id,
    };
    return db.del(TBL_EMPLOYEES, condition).then((result) => {
      return result.affectedRows > 0;
    });
  },
};
