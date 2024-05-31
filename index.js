
const fetchAndDisplayData = async (userId) => {
    try {
      // Fetch data from an API (example uses JSONPlaceholder)
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      
      // Check if the response is ok (status 200)
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      
      // Parse the response data as JSON
      const data = await response.json();
      
      // Use template literals to format the output
      const output = `
        <h2>User Information</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Address:</strong> ${data.address.street}, ${data.address.city}</p>
        <p><strong>Company:</strong> ${data.company.name}</p>
      `;
      
      // Insert the output into the DOM
      const userDataDiv = document.getElementById('user-data');
      userDataDiv.innerHTML = output;
    } catch (error) {
      // Handle any errors and display a message in the DOM
      const userDataDiv = document.getElementById('user-data');
      userDataDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  
  // Call the function to fetch and display data for a specific user
  fetchAndDisplayData(1);