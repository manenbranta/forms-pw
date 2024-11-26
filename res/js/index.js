let naoFilhos = document.getElementById("naofilhos");
let simFilhos = document.getElementById("simfilhos");
let numFilhos = document.getElementById("num-filhos");
let prevDisplay = numFilhos.style.display;

numFilhos.style.display = "none";

naoFilhos.addEventListener("change", () => {
    if (naoFilhos.checked) {
        numFilhos.style.display = "none";
    }
})

simFilhos.addEventListener("change", () => {
    if (simFilhos.checked) {
        numFilhos.style.display = prevDisplay;
    }
})

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    sessionStorage.setItem("data", JSON.stringify(Object.fromEntries(formData)));

    console.log(formData);

    window.location.href = "dados.html";
});