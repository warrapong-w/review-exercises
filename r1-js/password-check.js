const pass = process.argv[2];
const passWord = pass.length;
let hasNumber = false;
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (const digit of digits) {
  if (pass.includes(digit)){
    hasNumber = true;
  }
}

  if (passWord < 8){
  console.log("สั้นเกินไป");
} else if (passWord >= 8 && hasNumber === false){
  console.log("ต้องมีตัวเลข");
} else if (passWord >= 8 && hasNumber === true){
  console.log("OK");
};

