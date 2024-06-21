// without animation
// var coll = document.getElementsByClassName("red_mor");
// var i;

// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//     this.classList.toggle("red_mor_hidden");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//         content.style.display = "none";
//     } else {
//         content.style.display = "block";
//     }
//     });
// }

var wait_time = 500;

function change_class(elem, from_c, to_c) {
  elem.classList.remove(from_c);
  elem.classList.add(to_c);
}

function content_roller(cont) {
  if (cont.style.maxHeight) {
    cont.style.maxHeight = null;
  } else {
    cont.style.maxHeight = cont.scrollHeight + "px";
  }
}


// with animation
var coll_ = document.getElementsByClassName("red_mor");
var i;
// main loop to add func to all instances of the class "red_mor"
// the class can be changed in future operations, but this func will be assign to element forever
for (i = 0; i < coll_.length; i++) {
  coll_[i].addEventListener("click", function() {
    var coll = this
    var hid_but = coll.nextElementSibling;
    var content = hid_but.nextElementSibling;
    // var hid_but2 = content.nextElementSibling;

    change_class(coll, "red_mor", "red_mor_hidden");
    change_class(hid_but, "hid_but_gone", "hid_but_hidden");
    change_class(hid_but, "hid_but_hidden", "hid_but");
    
    setTimeout(function() {
      change_class(coll, "red_mor_hidden", "red_mor_gone")
    }, wait_time);
    
    content_roller(content);
  });
}


var hid_but_ = document.getElementsByClassName("hid_but_gone");
var i;
// main loop to add func to all instances of the class "hid_but_gone"
for (i = 0; i < hid_but_.length; i++) {
  hid_but_[i].addEventListener("click", function() {
    var coll = this.parentNode.firstElementChild;
    var hid_but = this;
    var content = hid_but.nextElementSibling;
    // var hid_but2 = content.nextElementSibling;

    change_class(coll, "red_mor_gone", "red_mor_hidden");
    change_class(coll, "red_mor_hidden", "red_mor");
    change_class(hid_but, "hid_but", "hid_but_hidden");

    setTimeout(function() {
      change_class(hid_but, "hid_but_hidden", "hid_but_gone")
    }, wait_time);

    content_roller(content);
  });
}


var hid_but2_ = document.getElementsByClassName("hid_but2");
var i;
// main loop to add func to all instances of the class "hid_but2"
for (i = 0; i < hid_but2_.length; i++) {
  hid_but2_[i].addEventListener("click", function() {
    var hid_but2 = this;
    var coll = hid_but2.parentNode.parentNode.firstElementChild;
    var hid_but = coll.nextElementSibling;
    var content = hid_but.nextElementSibling;

    change_class(coll, "red_mor_gone", "red_mor_hidden");
    change_class(coll, "red_mor_hidden", "red_mor");
    change_class(hid_but, "hid_but", "hid_but_hidden");

    setTimeout(function() {
      change_class(hid_but, "hid_but_hidden", "hid_but_gone")
    }, wait_time);

    content_roller(content);
  });
}
