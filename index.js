const dangerArray = [
  ["🎅", "👺"],
  [
    ["🎅", "🦁"],
    ["👹", "🎅"],
  ],
  [
    [
      ["🎅", "🐻"],
      ["🧌", "🎅"],
    ],
    [
      ["🐯", "🎅"],
      ["🎅", "😈"],
    ],
  ],
];

const output = document.querySelector(".output");

// First, I will need to create a DOM element to contain and display any 'santa's' that are found...
function displaySantaOnDOM(element) {
  const div = document.createElement("div");
  div.innerText = element;
  div.className = "santa-element";
  output.appendChild(div);
}

// I've not done recursion before - at first it was hard to get my head round it...here's what I found out:
// 1. create a for of loop to iterate over the array...
function findAndDisplaySanta(array) {
  for (const element of array) {
    //   This line below checks if the current element being iterated is itself an array...(I had no idea this could be done!)
    if (Array.isArray(element)) {
      // below ...this hurt my head a little...so, if the current element is an array, the function calls itself (this is called recursively)
      findAndDisplaySanta(element);
      //   to end, if the current element is not an array, the function checks if it is equal to the string "🎅".
    } else if (element === "🎅") {
      // if so, the target / element is displayed on the DOM...calling the function I created earlier...
      displaySantaOnDOM(element);
    }
  }
}

findAndDisplaySanta(dangerArray);
