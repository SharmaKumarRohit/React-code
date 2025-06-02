export default function isTokenExpired(tokenTimeStamp) {
  const currentTimeStamp = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
  return currentTimeStamp > tokenTimeStamp;
}
