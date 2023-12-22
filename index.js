let people = [];

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const peopleListEl = document.getElementById("people-list");

window.addEventListener("load", function () {
  loadDataFromLocalStorage();
  renderList(people);
});

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  if (inputValue) {
    people.push(inputValue);

    saveDataToLocalStorage();

    clearInputFieldEl();

    renderList(people);
  }
});

function renderList(array) {
  clearPeopleListEl();

  for (let i = 0; i < array.length; i++) {
    let currentPerson = array[i];

    appendPersonToPeopleListEl(currentPerson);
  }
}

function clearPeopleListEl() {
  peopleListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
  document.querySelector(".icon-container").innerHTML = `
  <img src="/icon.png"/>
  `;
}

function appendPersonToPeopleListEl(person) {
  let newEl = document.createElement("li");

  newEl.textContent = person;

  newEl.addEventListener("dblclick", function () {
    let index = people.indexOf(person);

    people.splice(index, 1);

    saveDataToLocalStorage();

    renderList(people);

    document.querySelector(".icon-container").innerHTML = `
    <img src="https://media.giphy.com/media/3ohhwi25ISXC7Z4tMs/giphy.gif" class="gif-size" alt="funny gif"/>
    `;
  });

  peopleListEl.append(newEl);
}

function saveDataToLocalStorage() {
  localStorage.setItem("people", JSON.stringify(people));
}

function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("people");
  people = storedData ? JSON.parse(storedData) : [];
}
