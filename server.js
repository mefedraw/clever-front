const express = require('express');
const fetch = require('node-fetch');
const app = express();

const BOT_TOKEN = '6974868246:AAEYOPAqcsYN46TscC3tr6swBNIekDxi44M'; // Замените на токен вашего бота

app.get('/getUserProfilePhoto', (req, res) => {
    const userId = req.query.userId;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUserProfilePhotos?user_id=${userId}&limit=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: error.message }));
});

app.get('/getFile', (req, res) => {
    const fileId = req.query.fileId;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).json({ error: error.message }));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});