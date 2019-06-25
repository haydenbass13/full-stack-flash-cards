const pgtools = require("pgtools");

const config = {
  user: "docker",
  host: "localhost",
  port: 5432,
  password: "docker"
};

const dropPostgres = () => pgtools.dropdb(config, "flash");

const createPostgres = () => pgtools.createdb(config, "flash");

const { Easy, Intermediate, Hard } = require("./index");

const seedPostgres = async i => {
  let questions = [];
  for (var i = 0; i <= 10; i++) {
    let card = {
      question: "question",
      correct: "correct",
      incorrect: ["incorrect", "incorrect"]
    };
    questions.push(card);
  }
  return Hard.bulkCreate(questions);
};

module.exports = {
  seedPostgres,
  createPostgres,
  dropPostgres
};
