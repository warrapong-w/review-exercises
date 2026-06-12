const weight = parseFloat(process.argv[2]);
const height = parseFloat(process.argv[3]);

const bmi = weight/(height**2);

if (bmi < 18.5){
  console.log(`BMI: ${bmi}`);
  console.log("กลุ่ม: ผอม");
  console.log("คำแนะนำ: ควรเพิ่มน้ำหนัก");
} else if (bmi >=18.5 && bmi <= 24.9){
  console.log(`BMI: ${bmi}`);
  console.log("กลุ่ม: ปกติ");
  console.log("คำแนะนำ: รักษาน้ำหนักนี้");
} else if (bmi >=25 && bmi <= 29.9){
  console.log(`BMI: ${bmi}`);
  console.log("กลุ่ม: น้ำหนักเกิน");
  console.log("คำแนะนำ: ออกกำลังกายเพิ่ม");
} else if (bmi > 30){
  console.log(`BMI: ${bmi}`);
  console.log("กลุ่ม: อ้วน");
  console.log("คำแนะนำ: ปรึกษาแพทย์");
}