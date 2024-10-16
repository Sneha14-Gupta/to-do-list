// MARK:DOM TARGETING

const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const addEl = document.querySelector(".Lists");


btnEl.addEventListener("click", addTask);
inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});


function addTask() {
  if (inputEl.value === "") {
    alert("please add the task");
  } else {
    let li = document.createElement("li");
    li.innerHTML += inputEl.value;
    li.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
    });




    addEl.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "&#10006";
    span.addEventListener("click", () => {
      addEl.removeChild(li);
    });

    li.appendChild(span);
  }
  inputEl.value = "";
}
