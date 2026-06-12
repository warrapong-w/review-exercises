const numbers = process.argv.slice(2).map(Number);

let sum = 0;

for (const n of numbers){
  if (n > 0){
  sum += n;
  }
}

console.log(sum);
