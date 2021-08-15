function rcheese(row, col, arr = [], str = ""){
    if(row == 0 && col == 0){
        arr.push(str);
        return;
    }
    if(col< 0 || row < 0){
        return;
    }
    cheese(row - 1, col, arr, str + 'v');
    cheese(row, col - 1, arr, str + 'h');
    cheese(row -1, col -1, arr, str + 'd')
    return arr;
}
let res = cheese(2,2);
console.log(res);