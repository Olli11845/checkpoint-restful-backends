const updateBtn = document.querySelector("#updateButton");
const newDataBtn = document.querySelector("#loadNewButton");
const data = [];
let persons = [];

const person1 = document.querySelector("#contact1");
const person2 = document.querySelector("#contact2");
const person3 = document.querySelector("#contact3");
const person4 = document.querySelector("#contact4");
const person5 = document.querySelector("#contact5");
const person6 = document.querySelector("#contact6");
const person7 = document.querySelector("#contact7");
const person8 = document.querySelector("#contact8");

const pic1 = document.querySelector("#pic1");
const pic2 = document.querySelector("#pic2");
const pic3 = document.querySelector("#pic3");
const pic4 = document.querySelector("#pic4");
const pic5 = document.querySelector("#pic5");
const pic6 = document.querySelector("#pic6");
const pic7 = document.querySelector("#pic7");
const pic8 = document.querySelector("#pic8");

const change1 = document.querySelector("#change1");

change1.addEventListener("click", function () {
  // ich glaube da hätte ich es anders aufbauen sollen. Das wird jetzt sehr kleinschrittig
});

newDataBtn.addEventListener("click", function () {
  for (let i = 0; i < 8; i++) {
    loadProfiles();
  }
});

updateBtn.addEventListener("click", function () {
  console.log(persons[0].picture);
  pic1.src = persons[0].picture;
  pic2.src = persons[1].picture;
  pic3.src = persons[2].picture;
  pic4.src = persons[3].picture;
  pic5.src = persons[4].picture;
  pic6.src = persons[5].picture;
  pic7.src = persons[6].picture;
  pic8.src = persons[7].picture;

  persons = [];
});

function loadProfiles() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
      persons.push(data[0]);
    })

    .then(() => {
      person1.innerHTML =
        persons[0].name.title +
        ". " +
        persons[0].name.first +
        " " +
        persons[0].name.last;

      person2.innerHTML =
        persons[1].name.title +
        ". " +
        persons[1].name.first +
        " " +
        persons[1].name.last;
      person3.innerHTML =
        persons[2].name.title +
        ". " +
        persons[2].name.first +
        " " +
        persons[2].name.last;
      person4.innerHTML =
        persons[3].name.title +
        ". " +
        persons[3].name.first +
        " " +
        persons[3].name.last;
      person5.innerHTML =
        persons[4].name.title +
        ". " +
        persons[4].name.first +
        " " +
        persons[4].name.last;
      person6.innerHTML =
        persons[5].name.title +
        ". " +
        persons[5].name.first +
        " " +
        persons[5].name.last;
      person7.innerHTML =
        persons[6].name.title +
        ". " +
        persons[6].name.first +
        " " +
        persons[6].name.last;
      person8.innerHTML =
        persons[7].name.title +
        ". " +
        persons[7].name.first +
        " " +
        persons[7].name.last +
        " ";
    });
}
