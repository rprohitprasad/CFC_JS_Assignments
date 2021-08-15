function nokia(str, arr, arr2, str2="", ind = 0) {
    if(ind == str.length){
        arr2.push(str2);
        return;
    }

    let ele = parseInt(str[ind]);
    let ch = arr[ele];
    for (const iterator of ch) {
        nokia(str, arr, arr2, str2+iterator, ind+1);
    }
}
let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuvw", "xyz"];
let arr2 = [];
noiad("12", arr, arr2);
console.log(arr2);