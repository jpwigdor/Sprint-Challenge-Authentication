const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find
};

async function add(user) {
  const [id] = await db("users").insert(user);
  return id;
}

function find() {
  return db("users").select("id", "username", "password");
}
