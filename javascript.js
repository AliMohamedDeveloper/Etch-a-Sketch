const container = document.querySelector(".container");
 const btn = document.createElement("button");
btn.classList.add("btn");
btn.id= "btnid";
btn.textContent="Number of buttons";
 

container.appendChild(btn);

btn.addEventListener("click", function (e) {
   let btnCount = prompt("How many buttons do you want to generate? ");
   for ( let i = 0 ; i < btnCount ; i ++){
const testdiv = document.createElement("div");



testdiv.classList.add("testdiv");
testdiv.id="eee"
testdiv.style.backgroundColor = "#8338ec";
testdiv.style.height = "250px";
testdiv.style.width= "250px";
container.appendChild(testdiv);


let btns = document.querySelector("div");

btns.addEventListener("mouseover" , (event)=>{
    event.target.style.backgroundColor = "red";
});
}
});


