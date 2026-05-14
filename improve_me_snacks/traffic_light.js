function trafficLight(color) {
  switch (color.toLowerCase()) {
    case "red":
      return "Stop";
    case "yellow":
      return "Get Ready";
    case "green":
      return "Go";
    default:
      return "Invalid color";
  }
}

console.log(trafficLight("green"));
