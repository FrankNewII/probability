function Combinator() {
    throw "Combinator is a static class. Use static methods of this class";
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

Combinator.permutations = function perm(arr, used, result) {
    if (arr.split) arr = arr.split('');
    used = used || [];
    result = result || [];

    for(let i = 0; i < arr.length; i++) {
        const v = arr[i];
        used.push(v);

        if (arr.length === 1) {
            result.push(used.join(''));
            used.pop();
        } else {
            arr.splice(i, 1);
            perm(arr, used, result);
            arr.splice(i, 0, v);
            used.pop();
        }
    }

    return result;
};
