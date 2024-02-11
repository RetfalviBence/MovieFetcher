const savedDataStore = new Map<string, { data: Object[]; timeStamp: number }>();

export function getResponseByCache(searchString: string) {
  const cachedData = savedDataStore.get(searchString);
  if (!cachedData || Date.now() - cachedData.timeStamp > 2000 * 60) {
    return undefined;
  }
  return cachedData.data;
}

export function saveResultToCache(key: string, data: Object[]) {
  savedDataStore.set(key, { data, timeStamp: Date.now() });
}
