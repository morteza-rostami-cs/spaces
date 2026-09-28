import express from "express";
import path from "path";
import env from "./config/env.js";
import expressLayouts from "express-ejs-layouts";

// path to current file
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import db from "./db/db.js";

// absolute path to current file -- server.js
// /home/apax/center/fun/spaces/src/server.js
const __filename = fileURLToPath(import.meta.url);

// /home/apax/center/fun/spaces/src
const __dirname = dirname(__filename);

const port = env.port;
const nodeEnv = env.nodeEnv;

const app = express();

// block google
app.use((req, res, next) => {
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  next();
});

// setup ejs
app.set("view engine", "ejs");
// path to views/templates folder
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "base"); // views/base.ejs

// serve static files
app.use(express.static(path.join(__dirname, "../public")));

app.get("/users", (req, res) => {
  const users = db
    .prepare(
      /**/ `
    select id, username
    from users
    order by id desc  
  `,
    )
    .all();

  res.json(users);
});

// render home.html
app.get("/", (req, res) => res.render("home", { title: "Home" }));

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
