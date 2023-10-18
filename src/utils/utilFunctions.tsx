export function parseTimestamp(timestamp: string): string {
  const year = parseInt(timestamp.substring(0, 4), 10);
  const month = parseInt(timestamp.substring(4, 6), 10) - 1;
  const day = parseInt(timestamp.substring(6, 8), 10);
  const hour = parseInt(timestamp.substring(8, 10), 10);
  const minutesInput = parseInt(timestamp.substring(10, 12), 10);
  const secondsInput = parseInt(timestamp.substring(12, 14), 10);

  const timestampDate = new Date(
    year,
    month,
    day,
    hour,
    minutesInput,
    secondsInput
  );
  const now = new Date();

  // Calculate the duration in seconds
  const durationInSeconds = Math.floor(
    (now.getTime() - timestampDate.getTime()) / 1000
  );

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(durationInSeconds / 3600);
  const remainingSeconds = durationInSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  // Format the duration as "HH:MM:SS"
  const formattedDuration = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return formattedDuration;
}
