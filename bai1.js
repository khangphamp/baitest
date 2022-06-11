const compare = (a, b) => {
    const a_s = a.toString();
    const b_s = b.toString();
    return a_s + b_s > b_s + a_s;
};
function insertionSort(arr) {
    let n = arr.length;
    for (var i = 1; i < n; i++) {
        for (var j = i; j > 0; j--) {
            if (compare(arr[j], arr[j - 1])) {
                const tmp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = tmp;
            } else {
                break;
            }
        }
    }
    return arr;
}
function FindMax(arr) {
    return insertionSort(arr).join('');
}

console.log(FindMax([0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12]));
console.log(FindMax([99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90]));
console.log(FindMax([1, 10, 19, 11, 13, 16, 19]));
