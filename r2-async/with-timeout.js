function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timeout after ${ms}ms`));
        }, ms);
    });
}

async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
}

async function getUserWithTimeout(username, ms) {
    return Promise.race([
        getUser(username),
        timeout(ms)
    ]);
}

async function main() {
    // ทดสอบ 1: Timeout ยาวพอ — ควรสำเร็จ
    console.log("=== Test 1: Timeout 5000ms ===");
    try {
        const user = await getUserWithTimeout("torvalds", 5000);
        console.log(`✓ ${user.name}`);
    } catch (err) {
        console.log(`✗ ${err.message}`);
    }
    
    // ทดสอบ 2: Timeout สั้นเกิน — ควร timeout
    console.log("\n=== Test 2: Timeout 50ms ===");
    try {
        const user = await getUserWithTimeout("torvalds", 50);
        console.log(`✓ ${user.name}`);
    } catch (err) {
        console.log(`✗ ${err.message}`);
    }
}

main();
