let n = 9735;
let res = 0;

while(n > 0){
    let a = n % 10;
    n = (n - (n%10))/10;
    res = res*10 + a;
}
console.log(res);