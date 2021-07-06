let n = 5;
let row = 1;
while (row<=5){
    col = 1;
    while(col <= row){
        process.stdout.write("*");
        col++;
    }
    process.stdout.write("\n");
    row ++;
}