tag_array = ["tag_cpp"]
tag_array.forEach(element => {
    let tag_group = document.getElementsByClassName(element);
    let len = tag_group.length;
    var i;

    for (i = 0; i < len; i++) {
        let this_anchor = element + i;
        let next_anchor = "#" + element + (i+1)%len;
        tag_group[i].id = this_anchor;
        tag_group[i].href = next_anchor;

    }

});
