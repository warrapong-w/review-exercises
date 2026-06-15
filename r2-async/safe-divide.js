const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);



try {
  if (num2 === 0){
  throw new Error("Error: ห้ามหารด้วยศูนย์");
  } 
  console.log(`${num1} / ${num2} = ${num1/num2}`);
} catch(err){
  console.error("Error:", err.message);
}