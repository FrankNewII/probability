function Combinator() {
    throw "Combinator is a static class. Use static methods of that class";
}

Combinator.combinations = function comb(arr, length, str, nArr) {

    nArr = nArr || [];
    str = str || "";

    arr.forEach(v => {
        if (length !== str.length + 1) {
            comb(arr, length, str + v, nArr);
        } else {
            nArr.push(str + v);
        }
    });


    return nArr;
};
