// จำลอง API ที่ fail 70%
async function flakyAPI() {
    if (Math.random() < 0.7) {
        throw new Error("Random failure");
    }
    return { data: "success!" };
}

// Retry wrapper
async function retry(fn, maxAttempts = 3, delayMs = 1000) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Attempt ${attempt}/${maxAttempts}...`);
            const result = await fn();
            console.log(`✓ Succeeded on attempt ${attempt}`);
            return result;
        } catch (err) {
            console.log(`✗ Attempt ${attempt} failed: ${err.message}`);
            
            // ถ้าเป็นครั้งสุดท้าย — throw ออกไป
            if (attempt === maxAttempts) {
                throw new Error(`Failed after ${maxAttempts} attempts: ${err.message}`);
            }
            
            // รอก่อนลองใหม่
            console.log(`Waiting ${delayMs}ms before retry...`);
            await new Promise(resolve => setTimeout(resolve, delayMs));
        }
    }
}

async function main() {
    try {
        const result = await retry(flakyAPI, 5, 500);
        console.log("\n🎉 Final result:", result);
    } catch (err) {
        console.error("\n💥 All attempts failed:", err.message);
    }
}

main();