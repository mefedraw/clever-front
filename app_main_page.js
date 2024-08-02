let tg = window.Telegram.WebApp;

tg.expand();

tg.ready();

const usernameElement = document.getElementById('username');
const avatarElement = document.getElementById('avatar');
const checkElement = document.getElementById('check');

window.addEventListener('resize', () => {
    document.body.style.height = window.innerHeight + 'px';
});

document.body.style.height = window.innerHeight + 'px';


async function fetchUserProfilePhoto(tgId) {
    console.log(`Fetching avatar for tgId: ${tgId}`);
    const response = await fetch(`https://localhost:44312/api/v1/auth/avatar?tgId=${tgId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const avatarUrl = await response.text();
    return avatarUrl;
}

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    usernameElement.innerText = `@${user.username}`;

    fetchUserProfilePhoto('1134784306').then(avatarUrl => {
        avatarElement.src = avatarUrl;
    });

    fetchUserProfilePhoto('1134784306').then(avatarUrl => {
        checkElement.innerText = avatarUrl;
    });

} else {
    console.log('NickName Err');
    usernameElement.innerText = 'NickName Err';
}
