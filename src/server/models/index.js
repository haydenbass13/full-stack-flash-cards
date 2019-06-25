const { pg } = require("../../../database/index");

const selectTier = async (tier, cb) => {
  let querystr =
    `SELECT * FROM ${tier}`;
  await pg.query(querystr).then(res => {
    cb(res);
  });
};

module.exports = selectTier;
