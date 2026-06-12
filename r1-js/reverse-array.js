const arr = process.argv.slice(2);
const reversed = [];
let i = arr.length - 1

while (i >= 0 ) {
  reversed.push(arr[i]);
  i--;
}

console.log(reversed);