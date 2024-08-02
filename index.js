const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const server = "https://api.warpcast.com";

// Статическая папка для стилей и скриптов
app.use(express.static(path.join(__dirname, 'public')));

app.get('/profile', async (req, res) => {
    const fid = req.query.fid || 2; // Замените на реальный FID пользователя
    try {
        const response = await axios.get(`${server}/v1/userdata?fid=${fid}`);
        res.json(response.data);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Ошибка при получении данных профиля' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
