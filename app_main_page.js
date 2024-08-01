let tg = window.Telegram.WebApp;

tg.expand();

tg.ready();

const usernameElement = document.getElementById('username');
const avatarElement = document.getElementById('avatar');

// Функция для получения информации о пользователе
function fetchUserProfilePhoto(userId) {
    fetch(`/getUserProfilePhoto?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok && data.result.photos.length > 0) {
                const photos = data.result.photos;
                const latestPhoto = photos[0]; // Берем последнюю обновленную фотографию
                const highestResolutionPhoto = latestPhoto[latestPhoto.length - 1]; // Берем фотографию самого высокого разрешения
                const fileId = highestResolutionPhoto.file_id;

                fetch(`/getFile?fileId=${fileId}`)
                    .then(response => response.json())
                    .then(fileData => {
                        if (fileData.ok) {
                            const filePath = fileData.result.file_path;
                            const fileUrl = `https://api.telegram.org/file/bot${tg.initDataUnsafe.user.bot_token}/${filePath}`;
                            avatarElement.src = fileUrl;
                        }
                    });
            }
        });
}

window.addEventListener('resize', () => {
    document.body.style.height = window.innerHeight + 'px';
});

document.body.style.height = window.innerHeight + 'px';

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    usernameElement.innerText = `@${user.username}`;
    fetchUserProfilePhoto(user.id);
} else {
    usernameElement.innerText = 'Unable to retrieve user information.';
}
