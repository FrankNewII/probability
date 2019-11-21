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

Combinator.permutations = function perm(arr, used, willReturn = true) {
    used = used || [];
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        const v = arr[i];
        used.push(v);
        arr.splice(i, 1);
        perm(arr, used, false);
        arr.splice(i, 0, v);


        if (willReturn) {
            result.push(used.join(''));
            used = [];
        }
    }

    return result;
};
