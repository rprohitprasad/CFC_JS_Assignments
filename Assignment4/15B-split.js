function subsplit(arr, ind = 0, leftArr = [], rightArr = [], leftSum = 0, rightSum = 0){
    if(ind === arr.length){
        if(leftSum === rightSum){
            console.log(leftArr, rightArr);
        }
        return;
    }
    leftArr.push(arr[ind]);
    subsplit(arr, ind+1, leftArr, rightArr, leftSum+arr[ind], rightSum);
    leftArr.pop();
    rightArr.push(arr[ind]);
    subsplit(arr, ind+1, leftArr, rightArr, leftSum, rightSum+arr[ind]);
    rightArr.pop();
}
let arr = [1, 2, 3, 3, 4, 5];
subsplit(arr);