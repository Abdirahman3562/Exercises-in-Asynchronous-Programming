
async function fetchdata() {
  console.log("data is fetching");
  const response = await fetch('./data.json');
  const data = await response.json();
  console.log("response", response);
  console.log("data is: ", data);
  
}

fetchdata();