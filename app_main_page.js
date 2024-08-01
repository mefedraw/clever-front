let tg = window.Telegram.WebApp;

tg.expand();

tg.ready();

const usernameElement = document.getElementById('username');

window.addEventListener('resize', () => {
    document.body.style.height = window.innerHeight + 'px';
});

document.body.style.height = window.innerHeight + 'px';

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    usernameElement.innerText = `@${user.username}`;
} else {
    usernameElement.innerText = 'user nickname error';
}
