// จำลอง API ที่ fail บางครั้ง
async function flakyAPI() {
    // 70% โอกาส fail
    if (Math.random() < 0.7) {
        throw new Error("Random failure");
    }
    return { data: "success!" };
}

async function main() {
    try {
        const result = await flakyAPI();
        console.log("✓", result);
    } catch (err) {
        console.log("✗", err.message);
    }
}

main();