async function getUser(username) {
  const response = await fetch (`https://api.github.com/users/${username}`);

  if(!response.ok){
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
 }

 return await response.json();

}

async function main() {
  const username = process.argv[2];
  if(!username){
    console.log("Usage: node fetch-user.js <username>");
    return;
  }
  
  try {
    const user = await getUser(username);
    console.log(`Name: ${user.name}`);
    console.log(`Repos: ${user.public_repos}`);
  } catch (err){
    console.error("Error:", err.message);
  }
}

main();
