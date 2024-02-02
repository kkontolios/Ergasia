var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
  
}

function togglesidebar(id) {
  document.querySelectorAll("#show_side").forEach(function(aside) {
    if (aside.id == id) {
      // Toggle specified DIV
      aside.style.display = aside.style.display == "none" ? "block" : "none";
    } else {
      // Hide other DIVs
      aside.style.display = "none";
    }
  });
}

function togglediv(id) {
  document.querySelectorAll(".cpanel").forEach(function(div) {
    if (div.id == id) {
      // Toggle specified DIV
      div.style.display = div.style.display == "none" ? "block" : "none";
    } else {
      // Hide other DIVs
      div.style.display = "none";
    }
  });
}

function sidebar() {
  var x = document.getElementById('show_side');
  var y = document.getElementById('sidebar');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.width = '100%'
  } else {
    x.style.display = 'none';
    y.style.width = '40px'
  }
}

function load() {
  var arr = document.getElementById('menu').getElementsByClassName('level');

  for (var i=0; i<arr.length; i++) {
      (function(index) {
         arr[i].addEventListener('click', function(){swapLevel(index);}, false);
      })(i);
  }
  // automatically open the first level
  swapLevel(0);
}

