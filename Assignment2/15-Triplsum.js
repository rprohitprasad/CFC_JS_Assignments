function tripsum(arr,target) {
    let count=0;
    for(i=0;i<arr.length;i++) {
        for(j=i;j<arr.length;j++) {
            for(k=i;k<arr.length;k++)
            if(arr[i] + arr[j] + arr[k] == target)
            console.log(arr[i] + "," + arr[j] + "," + arr[k])
        }
    }
}
let arr =[3, 1, 2, 9, 7, 5, -1, 6];
let target =9;
tripsum(arr,target)