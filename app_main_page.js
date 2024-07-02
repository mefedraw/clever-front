let tg = window.Telegram.WebApp;

tg.expand()
tg.ready();

document.getElementById('username').innerText = tg.initDataUnsafe.user.username;

