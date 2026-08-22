const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

app.post('/api/login', (req, res) => {
    console.log(req.body);
    res.json({
        message: `Post Request Successful`,
        data: req.body
    });
});

app.listen(PORT, () => {
    console.log(`A.T.L.A.S Backend Server is running at Port ${PORT}`);
}) 