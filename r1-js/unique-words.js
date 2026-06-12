const words = process.argv.slice(2);
const seen = {};

for (const word of words){
  seen[word] = true;
}

const unique = Object.keys(seen);
console.log(`คำที่ไม่ซ้ำ: ${unique.join(", ")}`);
console.log(`จำนวน: ${unique.length} คำ`);