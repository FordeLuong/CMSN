function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // thời gian bay từ 3 đến 5 giây
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Xóa trái tim sau 5 giây
}

setInterval(createHeart, 300); // Tạo trái tim mới mỗi 300ms
