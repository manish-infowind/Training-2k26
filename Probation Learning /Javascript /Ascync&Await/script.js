async function fetchUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

async function showUser() {
  const user = await fetchUserData();

  const div = document.getElementById("users");

  if (user) {
    div.innerHTML = `
      <p><b>Name:</b> ${user.name}</p>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>City:</b> ${user.address.city}</p>
    `;
  } else {
    div.innerHTML = "Failed to load user";
  }
}

showUser();