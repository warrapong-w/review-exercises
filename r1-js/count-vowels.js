const word = process.argv[2];
const vowels = ['a', 'e', 'i', 'o', 'u'];

let count = 0;
let vow = [];
for (const char of word) {
    if (vowels.includes(char.toLowerCase())) {
        count++;
        vow.push(char);
    }
}

console.log(count,vow);
