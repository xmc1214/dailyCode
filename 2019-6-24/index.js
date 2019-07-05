let arr = [0, 2, 3, 2, 5, 6, 7, 6, 5];
let temp = [];

for (let i in arr) {
    if (temp.indexOf(arr[i]) < 0) {
        temp.push(arr[i]);
    }
}
console.log(temp);