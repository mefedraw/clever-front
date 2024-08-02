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
        const response = await fetch(`https://localhost:44312/api/v1/auth/avatar?tgId=${tgId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const avatarUrl = await response.text(); // Получаем текстовую строку из ответа
        Console.log(avatarUrl);
        return avatarUrl;
    } catch (error) {
        console.error('Error fetching user profile photo:', error);
        return null;
    }
}

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    usernameElement.innerText = `@${user.username}`;

    fetchUserProfilePhoto(user.id).then(avatarUrl => {
        if (avatarUrl) {
            avatarElement.src = avatarUrl;
        } else {
            avatarElement.src = 'reqs/default-avatar.jpg';
        }
    });
} else {
    usernameElement.innerText = 'NickName Err';
}
