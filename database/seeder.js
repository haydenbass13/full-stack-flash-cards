const { pg } = require("./index");
const { dropPostgres, createPostgres, seedPostgres } = require("./utils");


(async () => {
  try {
    console.time("db seeding");
    // await dropPostgres();
    // await createPostgres();
    await pg.sync({ force: false, logging: false });
    for (let i = 0; i <= 5; i++) {
      await seedPostgres();
    }
    process.exit();
    console.timeEnd("db seeding");
  } catch (err) {
    throw new Error(err);
  }
})();
