const db = require("../database/dbConfig.js");

module.exports = {
  add,
  findAll,
  find
};

async function add(user) {
  const [id] = await db("users").insert(user);
  return id;
}

function findAll() {
  return db("users").select("id", "username", "password");
}

function find(condition) {
  return db("users").where(condition);
}
