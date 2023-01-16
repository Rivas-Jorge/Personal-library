///text to search code
function search() {
  let textToSearch = document.getElementById("text-to-search").value;
  let paragraph = document.getElementById("paragraph");
  textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let pattern = new 
  RegExp(`\\b${textToSearch}\\b`,"gi");

  paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}

///sticky header code 

window.onscroll = function () {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

