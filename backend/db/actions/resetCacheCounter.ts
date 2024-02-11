import { CacheCounter } from "../models/CacheCounter";

export async function resetCacheCounter() {
  await CacheCounter.findOneAndUpdate(
    {},
    { cacheCounter: 0 },
    { upsert: true }
  ).exec();
}
