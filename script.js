function showParagraph(button) {
  var paragraph = button.parentNode.nextElementSibling;
  paragraph.classList.toggle("hidden");
  button.classList.toggle("active");
  button.textContent = (button.textContent === "+") ? "-" : "+";
}