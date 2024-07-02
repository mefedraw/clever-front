let tg = window.Telegram.WebApp;

tg.expand()
tg.ready();

document.getElementById('username').innerText = tg.initDataUnsafe.user.username;

window.addEventListener('resize', () => {
    document.body.style.height = window.innerHeight + 'px';
});

document.body.style.height = window.innerHeight + 'px';