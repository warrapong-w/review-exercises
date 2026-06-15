function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log("เริ่ม...");
    console.log("รอ 2 วินาที");
    await sleep(2000);
    console.log("เสร็จ!");
}

main();