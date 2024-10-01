const express = require('express');
const { convertToCode } = require('./conversionService'); // Conversion logic for UI/UX to HTML/CSS
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to handle the design file upload and conversion
app.post('/convert-design', async (req, res) => {
  try {
    const { designFile } = req.body;  // Assuming designFile contains UI/UX design data
    const generatedCode = await convertToCode(designFile);
    
    res.status(200).send({ generatedCode });
  } catch (error) {
    res.status(500).send({ error: 'Failed to convert design to code' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
