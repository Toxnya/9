const express = require('express');
const fs = require('fs')
const redoc = require('redoc-express');
const path = require('path')
const app = express();


const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);


app.get('/api-docs.json', (req, res) => {
    const swaggerPath = path.join(__dirname, 'swagger.json');
    const swaggerSpec = fs.readFileSync(swaggerPath, 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.get('/docs', redoc({
    title: 'API Documentation',
    specUrl: '/api-docs.json',
}));

module.exports = app;