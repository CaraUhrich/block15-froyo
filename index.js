const userInputString = prompt(
  "Please enter ice cream flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

function createArray(str) {
  const outputArray = [];
  let currentFlavor = "";
  let char = "";

  for (let i = 0; i < str.length; i++) {
    char = str[i];

    if (char === ",") {
      outputArray.push(currentFlavor);
      currentFlavor = "";
    } else {
      currentFlavor = currentFlavor + char;
    }
  }

  outputArray.push(currentFlavor);

  console.log(outputArray);
  return outputArray
}

function createOrderObj(array) {
  const order = {};
  let currentFlavor = ''

  for (let i = 0; i < array.length; i++) {
    currentFlavor = array[i];

    if (order[currentFlavor]) {
    order[currentFlavor]++;
    } else order[currentFlavor] = 1;
  }

  console.log(order);
  return order
}

createOrderObj(createArray(userInputString))