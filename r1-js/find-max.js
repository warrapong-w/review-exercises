const numbers = process.argv.slice(2).map(Number);

let max = numbers[0];

for (const n of numbers){
  if (max < n){
    max = n;
  }
}
console.log(max);
