let tg = window.Telegram.WebApp;

tg.expand();

tg.ready();

const usernameElement = document.getElementById('username');
const avatarElement = document.getElementById('avatar');

window.addEventListener('resize', () => {
    document.body.style.height = window.innerHeight + 'px';
});

document.body.style.height = window.innerHeight + 'px';

async function fetchUserProfilePhoto(tgId) {
    try {
        console.log(`Fetching avatar for tgId: ${tgId}`);
        const response = await fetch(`https://localhost:44312/api/v1/auth/avatar?tgId=${tgId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const avatarUrl = await response.text(); // Получаем текстовую строку из ответа
        console.log(`Avatar URL received: ${avatarUrl}`);
        return avatarUrl;
    } catch (error) {
        console.error('Error fetching user profile photo:', error);
        return null;
    }
}

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    usernameElement.innerText = `@${user.username}`;

    fetchUserProfilePhoto('1134784306').then(avatarUrl => {
        if (avatarUrl) {
            console.log(`Setting avatar URL: ${avatarUrl}`);
            avatarElement.src = avatarUrl;
        } else {
            console.log('Setting default avatar URL');
            avatarElement.src = 'reqs/default-avatar.jpg';
        }
    });
} else {
    console.log('NickName Err');
    usernameElement.innerText = 'NickName Err';
}
