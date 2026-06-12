const pay = parseInt(process.argv[2]);
const tipP = parseInt(process.argv[3]);
const realTip = (pay*tipP)/100;
const total = pay + realTip;

console.log(`ค่าอาหาร: ${pay}`);
console.log(`Tip ${tipP}: ${realTip} บาท`);
console.log(`รวม: ${total} บาท`);
