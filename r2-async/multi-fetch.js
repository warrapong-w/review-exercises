async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
}

async function main() {
    const usernames = ["torvalds", "nonexistent_xyz_123", "octocat"];
    
    // วิธีที่ 1: Sequential — ทีละคน
    console.log("=== Sequential ===");
    console.time("sequential");
    
    for (const name of usernames) {
      try {
        const user = await getUser(name);
        console.log(`✓ ${user.name} (${user.public_repos} repos)`);
    } catch (err) {
        console.log(`✗ ${name}: ${err.message}`);
    }
  }
    console.timeEnd("sequential");
    
    // วิธีที่ 2: Parallel — พร้อมกัน
    console.log("\n=== Parallel ===");
    console.time("parallel");
    
    const promises = usernames.map(name => getUser(name));
    const results = await Promise.allSettled(promises);

for (const result of results) {
    if (result.status === "fulfilled") {
        console.log(`✓ ${result.value.name} (${result.value.public_repos} repos)`);
    } else {
        console.log(`✗ ${result.reason.message}`);
    }
}
    
    console.timeEnd("parallel");
}

main();