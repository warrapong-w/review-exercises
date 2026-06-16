async function getUser(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  if (!response.ok) {
        const err = new Error(`HTTP ${response.status}`);
        err.status = response.status;        
        throw err;
    }
    return await response.json();
}

async function getRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
        const err = new Error(`HTTP ${response.status}`);
        err.status = response.status;        
        throw err;
    }
    return await response.json();
}

async function  main() {
  const username = process.argv[2];
  if (!username){
    console.log("Usage: node chain-api.js <username>");
    return;
  }

  try {
    const user = await getUser(username);
    const repos = await getRepos(username);

    let totalStars = 0;
    for (const repo of repos){
      totalStars += repo.stargazers_count;

    } 
    const top5 = [...repos]                           // copy array (ไม่กระทบของเดิม)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)   // เรียงจากมาก → น้อย
    .slice(0, 5);                                  // เอา 5 ตัวแรก

    console.log(`👤 ${user.name} (@${username})`);
    console.log(`📍 Bio: ${user.bio || "(no bio)"}`);
    console.log(`📦 Repos: ${repos.length} public`);
    console.log (`Total stars = ${totalStars}`);
    console.log(`\n🏆 Top 5 by stars:`);
    top5.forEach((repo, i) => {
    console.log(`  ${i + 1}. ${repo.name.padEnd(20)} ⭐ ${repo.stargazers_count.toLocaleString()}`);
});
  }
  
  catch (err){
  console.log("Error:", err.message);
  }
}

main();