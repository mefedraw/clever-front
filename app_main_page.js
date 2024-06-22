let tg = window.Telegram.WebApp;

tg.ready();

document.getElementById('username').innerText = tg.initDataUnsafe.user.username;

