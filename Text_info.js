let textareaEl = document.querySelector("#text");
let text = null;
let data = {
  Words: 0,
  Sentences: 0,
  UpperCase: 0,
  LowerCase: 0,
  Spaces: 0,
  Digits: 0,
  Vowels: 0,
  Consonants: 0,
};
const findLength = (item) => (item == null ? 0 : item.length);
const setText = () => {
  text = textareaEl.value;
  if (text != null) {
    data.Sentences = findLength(text.match(/\056/g));
    data.Words = findLength(text.match(/[a-zA-Z]+/g));
    data.Spaces = findLength(text.match(/\s/g));
    data.UpperCase = findLength(text.match(/[A-Z]/g));
    data.LowerCase = findLength(text.match(/[a-z]/g));
    data.Digits = findLength(text.match(/\d/g));
    data.Vowels = findLength(text.match(/[aeiou]/gi));
    data.Consonants = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
  }
  localStorage.setItem("data", JSON.stringify(data));
  window.location = "Text_output.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = "";
  for (item in data) {
    htmlContent += `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
      </div>`;
  }
  document.querySelector(".info-wrapper").innerHTML = htmlContent;
};
