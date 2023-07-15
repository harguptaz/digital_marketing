function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById
}
function showPopUp() {
    document.getElementById("supportForm").style.display = "block";
}
function hidePopUp() {
    document.getElementById("supportForm").style.display = "none";
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hidePopUp()
});