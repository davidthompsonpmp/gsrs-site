import { Pool } from "pg";

declare global {
  var gsrsPgPool: Pool | undefined;
}

export const pool =
  global.gsrsPgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  global.gsrsPgPool = pool;
}
