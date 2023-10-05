

export function parseTimestamp(timestamp: string) {
  const year = parseInt(timestamp.substring(0, 4), 10);
  const month = parseInt(timestamp.substring(4, 6), 10) - 1;
  const day = parseInt(timestamp.substring(6, 8), 10);
  const hour = parseInt(timestamp.substring(8, 10), 10);
  const minutes = parseInt(timestamp.substring(10, 12), 10);
  const seconds = parseInt(timestamp.substring(12, 14), 10);

  return new Date(year, month, day, hour, minutes, seconds);
}