let selectedAnswer = null;

// Berpindah halaman
function showPage(pageId) {

    const pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        page.classList.remove('active');
    });

    const target = document.getElementById(pageId);

    if (target) {
        target.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Memilih jawaban
function selectAnswer(button, answer) {

    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.classList.remove('selected');
    });

    button.classList.add('selected');

    selectedAnswer = answer;

    document.getElementById('answer-message').textContent =
        'Jawaban sudah dipilih ♡';
}


// Memeriksa pilihan
function checkAnswer() {

    if (!selectedAnswer) {

        document.getElementById('answer-message').textContent =
            'Pilih salah satu jawaban terlebih dahulu ya.';

        return;
    }

    showPage('page-bible');
}


// Kembali ke awal
function restartWebsite() {

    selectedAnswer = null;

    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.classList.remove('selected');
    });

    document.getElementById('answer-message').textContent = '';

    showPage('page-date');
}


// Selalu mulai dari halaman awal ketika website dibuka
window.addEventListener('pageshow', function () {

    selectedAnswer = null;

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById('page-date').classList.add('active');

});