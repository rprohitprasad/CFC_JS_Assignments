function count5(arr){
    let count = 0;

    for (let i=0; i<arr.length; i++){
        if(arr[i]%5==0){
            count++;
        }
    }
    return count;
}
