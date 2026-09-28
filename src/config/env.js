class Env {
  constructor(env) {
    if (!env) throw new Error("env missing");

    if (!env.NODE_ENV) throw new Error("NODE_ENV missing");
    if (!env.PORT) throw new Error("PORT missing");
    if (!env.DB_URL) throw new Error("DB_URL missing");

    this.nodeEnv = env.NODE_ENV;
    this.port = env.PORT;
    this.dbUrl = env.DB_URL;
  }
}

export const env = new Env(process.env);
