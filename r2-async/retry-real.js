async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
        const err = new Error(`HTTP ${response.status}`);
        err.status = response.status;        // ← เก็บ status ใน error
        throw err;
    }
    return await response.json();
}

async function smartRetry(fn, maxAttempts = 3, delayMs = 500) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Attempt ${attempt}/${maxAttempts}...`);
            return await fn();
        } catch (err) {
            console.log(`✗ Attempt ${attempt}: ${err.message}`);
            
            // ไม่ retry ถ้าเป็น permanent error
            if (err.status === 400 || err.status === 401 || err.status === 404) {
                console.log(`(${err.status} = permanent — ไม่ retry)`);
                throw err;
            }
            
            if (attempt === maxAttempts) {
                throw new Error(`Failed after ${maxAttempts} attempts`);
            }
            
            await new Promise(r => setTimeout(r, delayMs));
        }
    }
}

async function main() {
    console.log("=== Test 1: User ปกติ ===");
    try {
        const user = await smartRetry(() => getUser("torvalds"));
        console.log(`✓ Got: ${user.name}\n`);
    } catch (err) {
        console.error(`✗ ${err.message}\n`);
    }
    
    console.log("=== Test 2: User ไม่มี (404 — ไม่ retry) ===");
    try {
        const user = await smartRetry(() => getUser("nonexistent_xyz_123"));
        console.log(`✓ Got: ${user.name}\n`);
    } catch (err) {
        console.error(`✗ ${err.message}\n`);
    }
}

main();