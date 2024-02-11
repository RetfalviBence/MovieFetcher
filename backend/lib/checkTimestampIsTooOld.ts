export function checkTimeStampIsTooOld(timeStamp: Date) {
  return Date.now() - timeStamp.getTime() > 2000 * 60;
}
