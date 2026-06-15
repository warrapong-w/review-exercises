const fs = require('fs');

function readFile(path) {
  try {
    return fs.readFileSync(path, 'utf8')
  } catch (err){
    if (err.code === 'ENOENT'){
      throw new Error("ไฟล์ไม่พบ");
    }
    throw err;
  }
}

try {
  const content = readFile(process.argv[2]);
  console.log(content);
} catch (err){
  console.error("Error:", err.message);
}