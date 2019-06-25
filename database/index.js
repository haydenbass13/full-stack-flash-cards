const Sequelize = require("sequelize");

const pg = new Sequelize("flash", "docker", "docker", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  logging: false
});

const Easy = pg.define("easy", {
  question: Sequelize.STRING,
  correct: Sequelize.STRING,
  incorrect: Sequelize.ARRAY(Sequelize.STRING)
});
const Intermediate = pg.define("intermediate", {
  question: Sequelize.STRING,
  correct: Sequelize.STRING,
  incorrect: Sequelize.ARRAY(Sequelize.STRING)
});
const Hard = pg.define("hard", {
  question: Sequelize.STRING,
  correct: Sequelize.STRING,
  incorrect: Sequelize.ARRAY(Sequelize.STRING)
});




module.exports = { pg, Easy, Intermediate, Hard};