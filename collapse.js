// without animation
// var coll = document.getElementsByClassName("collapse");
// var i;

// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//     this.classList.toggle("col_active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//         content.style.display = "none";
//     } else {
//         content.style.display = "block";
//     }
//     });
// }



// with animation
var coll_ = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll_.length; i++) {
  coll_[i].addEventListener("click", function() {
    var coll = this
    var hid_but = coll.nextElementSibling;
    var content = hid_but.nextElementSibling;
    // var hid_but2 = content.nextElementSibling;

    coll.classList.remove("collapse");
    coll.classList.add("col_active");
    hid_but.classList.remove("hid_button_hidden");
    hid_but.classList.add("hid_but");
    // hid_but2.classList.toggle("hid_but2");
    
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


var hid_but_ = document.getElementsByClassName("hid_but");
var i;

for (i = 0; i < hid_but_.length; i++) {
  hid_but_[i].addEventListener("click", function() {
    var coll = this.parentNode.firstElementChild;
    var hid_but = this;
    var content = hid_but.nextElementSibling;
    // var hid_but2 = content.nextElementSibling;

    coll.classList.remove("col_active");
    coll.classList.add("collapse");
    hid_but.classList.remove("hid_but");
    hid_but.classList.add("hid_but_hidden");
    // hid_but2.classList.toggle("hid_but2_hidden");

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


var hid_but2_ = document.getElementsByClassName("hid_but2");
var i;

for (i = 0; i < hid_but2_.length; i++) {
  hid_but2_[i].addEventListener("click", function() {
    var hid_but2 = this;
    var coll = hid_but2.parentNode.parentNode.firstElementChild;
    var hid_but = coll.nextElementSibling;
    var content = hid_but.nextElementSibling;

    coll.classList.remove("col_active");
    coll.classList.add("collapse");
    hid_but.classList.remove("hid_but");
    hid_but.classList.add("hid_but_hidden");
    // hid_but2.classList.toggle("hid_but2_hidden");

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
