function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function fetchData() {
  console.log("Start");

  const result = await getData(); // waits here

  console.log(result);
  console.log("End");
}

fetchData();