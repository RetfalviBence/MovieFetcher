import { Schema, model } from "mongoose";

type CacheCounterData = { cacheCounter: number };

const CacheCounterSchema = new Schema<CacheCounterData>({
  cacheCounter: Number,
});

export const CacheCounter = model<CacheCounterData>(
  "CacheCounter",
  CacheCounterSchema
);
