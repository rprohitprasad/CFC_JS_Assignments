

let n = 5;

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= row; col++) {
    process.stdout.write(col + " ");
  }
  process.stdout.write("\n");
}