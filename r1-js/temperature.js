const temp = parseFloat(process.argv[2]);


if (temp < 0){
  console.log("หนาวจัด");
} else if (temp >= 0 && temp <= 20){
  console.log("เย็น");
} else if (temp > 20 && temp <= 30){
  console.log("อุ่น");
} else {
  console.log("ร้อน");
};


