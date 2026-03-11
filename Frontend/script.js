// Auto select internship when clicking Apply button

document.querySelectorAll(".apply-btn").forEach(button => {

button.addEventListener("click", function(){

const internship = this.parentElement.querySelector("h4").innerText

const dropdown = document.querySelector("select")

dropdown.value = internship

})

})