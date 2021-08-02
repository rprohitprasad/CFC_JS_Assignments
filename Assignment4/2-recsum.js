function recsum(n) {
    if(n<=1) {
        return n;
    }
    return  n + recsum(n-1);
}
let n = 5;
console.log(recsum(n))