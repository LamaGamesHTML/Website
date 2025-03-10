document.addEventListener('DOMContentLoaded', () => {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gamePath = card.dataset.game;
            if (gamePath) {
                window.location.href = gamePath;
            }
        });
    });

    // Check if user is signed in
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        const nav = document.querySelector('nav');
        nav.innerHTML = `<span class="user-email">${userEmail}</span>`;
    }
});