document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const timerDisplay = document.getElementById('timer');
    const confirmation = document.getElementById('confirmation');
    let startTime = null;
    let timerInterval = null;

    const inputs = form.querySelectorAll('input, textarea');
    inputs[0].addEventListener('focus', () => {
        if (!startTime) {
            startTime = Date.now();
            timerInterval = setInterval(() => {
                const seconds = Math.floor((Date.now() - startTime) / 1000);
                timerDisplay.textContent = `Time spent: ${seconds}s`;
            }, 1000);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            clearInterval(timerInterval);
            confirmation.classList.remove('hidden');
            form.reset();
            startTime = null;
            timerDisplay.textContent = 'Time spent: 0s';
            setTimeout(() => confirmation.classList.add('hidden'), 3000);
        } else {
            form.reportValidity();
        }
    });
});