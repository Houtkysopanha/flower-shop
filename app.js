const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Redirect to the home page
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'html', 'Flower1.html');
    console.log(`Serving file: ${filePath}`); // Debug log
    res.sendFile(filePath); // Ensure the file path is correct
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
