let value = 0;

document.querySelector("#value").innerHTML = value;

let button = document.getElementsByClassName("CounterButton");
button[0].addEventListener("click", () => up());

function up() {
  value++;
  console.log(value);
  document.querySelector("#value").innerHTML = value;
}
