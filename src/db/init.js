import db from "./db.js";

db.exec(/*sql*/ `
   CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
   );
`);

console.log("Database initialized.");

// insert some test user
function insertUser() {
  const insertUser = db.prepare(`
      INSERT INTO users (username, password_hash)
      VALUES (?, ?)
   `);

  insertUser.run("alice", "temporary-hash");
}

function findUserByUsername() {
  const user = db
    .prepare(
      `
    SELECT *
    FROM users
    WHERE username = ?
`,
    )
    .get("alice");

  console.log(user);
}

// findUserByUsername();

function updateById() {
  db.prepare(
    `
    UPDATE users
    SET username = ?
    WHERE id = ?
`,
  ).run("alice2", 1);
}

// updateById();

function deleteUser(id) {
  db.prepare(
    `
    DELETE FROM users
    WHERE id = ?
`,
  ).run(id);
}

function findAllUsers() {
  const users = db
    .prepare(
      `
    SELECT id, username, created_at
    FROM users
    ORDER BY id DESC
`,
    )
    .all();

  console.log(users);
}

findAllUsers();

/*

# transaction

const createSomething = db.transaction(() => {
    // SQL #1
    // SQL #2
    // SQL #3
});

createSomething();
*/
