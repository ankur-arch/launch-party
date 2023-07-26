import { db, dbWithAccelerate } from "../database";

const query = async () => {
  const start = Date.now();
  const data = await db.notes.count();
  return { count: data, info: null, time: Date.now() - start };
};

const queryWithAccelerate = async () => {
  const start = Date.now();
  // TODO: Task 2 - add caching with Accelerate with a TTL of 30s
  const data = await dbWithAccelerate.notes.count();
  return {
    count: data,
    // TODO: Task 3 - return additional Info
    info: null,
    time: Date.now() - start,
  };
};

export { query, queryWithAccelerate };
