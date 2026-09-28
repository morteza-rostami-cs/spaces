import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(dirname(__filename));
// project root
const __rootname = dirname(__dirname);

// console.log(__dirname);
// console.log(__rootname);

class Env {
  constructor(env) {
    if (!env) throw new Error("env missing");

    if (!env.NODE_ENV) throw new Error("NODE_ENV missing");
    if (!env.PORT) throw new Error("PORT missing");
    if (!env.DB_URL) throw new Error("DB_URL missing");

    this.nodeEnv = env.NODE_ENV;
    this.port = env.PORT;
    this.dbUrl = env.DB_URL;

    // db path
    this.dbPath = path.join(__rootname, "/data/spaces.db");
  }
}

// console.log(new Env(process.env));

const env = new Env(process.env);
export default env;
