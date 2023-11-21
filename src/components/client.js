const socket = new WebSocket('ws://localhost:8080'); // Replace with your server's address

socket.onopen = () => {
  console.log('WebSocket connected');
};

socket.onmessage = (event) => {
  // Handle received data from the server
  console.log('Received data:', event.data);
  // Update state or perform actions based on received data
};

socket.onclose = () => {
  console.log('WebSocket disconnected');
};

socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};
