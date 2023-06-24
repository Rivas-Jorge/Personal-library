///text to search 
function search() {
  let textToSearch = document.getElementById("text-to-search").value;
  let paragraph = document.getElementById("paragraph");
  textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  let pattern = new 
  RegExp(`\\b${textToSearch}\\b`,"gi");

  paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}

///sticky top header 

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


//search book function in main page 
 
function searchBook() {
    var bookName = document.getElementById("text-to-search").value.toLowerCase();
    if (bookName === "the alchemist") {
      window.location.href = "alchemist.html";
    } else if (bookName === "life of pi") {
      window.location.href = "lifeofpi.html";
    }
  }
  //bookmark
  var bookmarkButtons = document.getElementsByClassName('bookmark-button');
  for (var i = 0; i < bookmarkButtons.length; i++) {
    bookmarkButtons[i].addEventListener('click', function() {
      var bookmarkKey = 'myBookmark';
      var bookmarkData = {
        url: window.location.href,
        title: document.title
      };
      localStorage.setItem(bookmarkKey, JSON.stringify(bookmarkData));
      window.location.href = bookmarkData.url; 
    });
  }
  //gets boook mark info from local storage
  window.addEventListener('load', function() {
    var bookmarkKey = 'myBookmark';
    var bookmarkData = JSON.parse(localStorage.getItem(bookmarkKey));
    if (bookmarkData) {
      console.log('Bookmarked page URL:', bookmarkData.url);
      console.log('Bookmarked page title:', bookmarkData.title);
       window.location.href = bookmarkData.url;
    } else {
      console.log('No bookmark data found');
    }
  });
