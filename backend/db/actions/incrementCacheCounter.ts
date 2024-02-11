import { CacheCounter } from "../models/CacheCounter";

export async function incrementCacheCounter() {
  return CacheCounter.findOneAndUpdate(
    {},
    { $inc: { cacheCounter: 1 } },
    { new: true, upsert: true }
  ).exec();
}
