export default function hoursHelper(minutes) {
  if (minutes > 60) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    let ret = "";

    if (hours === 1) {
      ret += "1 hour";
    } else {
      ret += hours + " hours";
    }
    if (mins === 0) {
    } else {
      ret += " and " + mins + " minutes";
    }
    return ret;
  } else {
    return minutes + " minutes";
  }
}
