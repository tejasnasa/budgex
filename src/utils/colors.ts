export function getColor(category: string) {
  const colors = ["#000", "#ffc658", "#898989", "#ff0000"];
  console.log(category);
  if (category === "Food") {
    return colors[0];
  } else if (category === "Transport") {
    return colors[1];
  } else if (category === "Movies") {
    return colors[2];
  } else {
    return colors[3];
  }
}
