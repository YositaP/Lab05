let Switch = false;

function onClickButton() {
    Switch = !Switch;
    if (!Switch) {
        document.querySelector("h1").textContent = "GOOD MORNING";
        document.querySelector("h2").textContent = "This is day time!";
        document.querySelector("h1").style.color = "black";
        document.querySelector("h2").style.color = "black";
        document.querySelector("#p1").style.color = "black";
        document.querySelector("#p2").style.color = "black";
        document.querySelector("span").style.color = "red";
        document.body.style.backgroundColor = "white";
        document.getElementById("myButton").innerHTML = "Activate the night mode";
    } else {
        document.querySelector("h1").textContent = "GOOD NIGHT";
        document.querySelector("h2").textContent = "This is night time!";
        document.querySelector("h1").style.color = "white";
        document.querySelector("h2").style.color = "white";
        document.querySelector("#p1").style.color = "white";
        document.querySelector("#p2").style.color = "white";
        document.querySelector("span").style.color = "blue";
        document.body.style.backgroundColor = "black";
        document.getElementById("myButton").innerHTML = "Activate the day mode";
    }
}
