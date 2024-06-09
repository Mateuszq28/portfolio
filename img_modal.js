var img_solid_group = document.getElementsByClassName("modal-solid-img");
var i;

for (i = 0; i < img_solid_group.length; i++) {

    var img_solid = img_solid_group[i];

    // Get the modal
    var modal = img_solid.nextElementSibling;

    // Get the <span> element that closes the modal
    var span_close = modal.firstElementChild;
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img_modal = span_close.nextElementSibling;
    var captionText = img_modal.nextElementSibling;

    img_solid.onclick = function(){
    modal.style.display = "block";
    img_modal.src = this.src;
    captionText.innerHTML = this.alt;
    }

    // When the user clicks on <span> (x), close the modal
    span_close.onclick = function() {
    modal.style.display = "none";
    }

}