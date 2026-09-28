import Database from "better-sqlite3";
import path from "path";

import env from "../config/env.js";

const db = new Database(env.dbPath);

export default db;
