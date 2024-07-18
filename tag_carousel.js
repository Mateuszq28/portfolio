let tag_array = ["tag_cpp", "tag_csharp", "tag_unity", "tag_html", "tag_css", "tag_python", "tag_sql", "tag_pytorch", "tag_pandas", "tag_matplotlib", "tag_r", "tag_xamarin", "tag_matlab", "tag_c", "tag_php"]
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
