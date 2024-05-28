const content_set1 = {col_but_e:"expand1", col_cont:"col_cont1", col_but_c:"collapse1"};


const con_list = [content_set1];


function add_collapse_listeners(con_set) {

    var coll = document.getElementsByClassName(collapse);
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
}

con_list.forEach(element => {
    add_collapse_listeners(element);
});
