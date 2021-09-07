let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];

let checkIcon = document.getElementById("check_icon");
let deleteIcon = document.getElementById("delete_icon");

let i = 0;

deleteIcon.addEventListener("click", function () {
  typeNote();
});
checkIcon.addEventListener("click", function () {
  creteNote();
});

function typeNote() {
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}
function creteNote() {
  let noteText = document.getElementById("note-text").value;
  let node0 = document.createElement("div");
  let node1 = document.createElement("h2");

  node1.innerHTML = noteText;

  node1.setAttribute(
    "style",
    "width:250px; height:250px; padding:25px; font-size:20px; margin-top:10px; overflow:hidden; box-shadow:10px 10px 20px #000;"
  );
  node1.style.background = color();
  node1.style.margin = margin();
  node1.style.transform = rotate();

  node0.appendChild(node1);

  container2.insertAdjacentElement("beforeend", node0);

  document.getElementById("note-text").value = " ";
}

function margin() {
  let random_margin = ["-5px", "1px", "4px", "5px", "10px", "20px", "15px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}
function rotate() {
  let random_rotate = [
    "rotate(5deg)",
    "rotate(15deg)",
    "rotate(-5deg)",
    "rotate(-15deg)",
    "rotate(10deg)",
    "rotate(-10deg)",
  ];
  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}
function color() {
  let random_color = [
    "#EBDEF0",
    "#D4E6F1",
    "#D1F2EB",
    "#FCF3CF",
    "#F6DDCC",
    "#FADBD8",
  ];
  return random_color[Math.floor(Math.random() * random_color.length)];
}
