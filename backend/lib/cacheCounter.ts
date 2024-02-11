export let cacheCounter = 0;

export function resetCacheCounter() {
  cacheCounter = 0;
}

export function incrementCacheCounter() {
  cacheCounter++;
  console.log("cache used sequantally: ", cacheCounter);
}
