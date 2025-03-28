export function getColor(category: string) {
  const colors = [
    "#000",
    "#ffc658",
    "#898989",
    "#a29bfe",
    "#fd79a8",
    "#00cec9",
  ];
  console.log(category);
  if (category === "Food") {
    return colors[0];
  } else if (category === "Transport") {
    return colors[1];
  } else if (category === "Movies") {
    return colors[2];
  } else if (category === "Groceries") {
    return colors[3];
  } else {
    return colors[4];
  }
}
