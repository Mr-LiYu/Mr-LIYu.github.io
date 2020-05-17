function getQuery() {
    var str = location.search.replace("?", "");
    var arr = str.split("&");
    var query = {};
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        query[arr2[0]] = arr2[1];
    }
    return query;
}