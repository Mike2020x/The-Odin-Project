const container = document.querySelector("#container");
const content = document.createElement("div");

content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);
// p
const p = document.createElement("p");
p.textContent = "Hey I’m red!";
p.style.color = "red"

content.appendChild(p);
// h3
const h3 = document.createElement("h3");
h3.textContent = "I’m a blue h3!";
h3.style.color = "blue"

content.appendChild(h3);

// div border pink > h1 p

const div2 = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = "Im in a div"
const p2 = document.createElement("div");
p2.textContent = "ME TOO!"

div2.appendChild(h1);
div2.appendChild(p2);
div2.setAttribute("style","background:pink;border:black 2px solid;")
div2.style.marginBottom = "15px"
content.appendChild(div2);

// buttons
// Method 1
// <button onclick="alert('Hello World')">Click Me</button>

// Method 2
// <!-- the HTML file -->
// <button id="btn">Click Me</button>
// // the JavaScript file
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

const btn = document.querySelector('#btn');
function alertFunction(){
    alert("you did it")
}
btn.addEventListener("click",alertFunction) // Function

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
  e.target.style.color = 'white';
});