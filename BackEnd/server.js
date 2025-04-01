const express = require('express');
const bodyParser = require('body-parser');
const petitionRoutes = require('./routes/petitions');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/petitions', petitionRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});