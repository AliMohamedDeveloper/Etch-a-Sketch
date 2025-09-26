const container = document.querySelector(".container");

for ( let i = 0 ; i < 16 ; i ++){
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

 