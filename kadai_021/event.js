const Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('text').textContent = 'ボタンをクリックしました';
    },2000);
});