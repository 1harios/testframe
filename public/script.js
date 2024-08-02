async function checkProfile() {
    const fid = 2; // Замените на реальный FID пользователя
    try {
        const response = await fetch(`/profile?fid=${fid}`);
        const data = await response.json();
        document.getElementById('profileInfo').innerHTML = 'FID: ' + data.fid + '<br/>Подписчики: ' + data.followersCount;
    } catch (e) {
        console.error(e);
        document.getElementById('profileInfo').innerHTML = 'Ошибка при получении данных профиля';
    }
}
