// notification.js
function showNotification() {
    document.getElementById('orderNotification').style.display = 'block';
    window.scrollTo(0, 0);
}

function closeNotification() {
    document.getElementById('orderNotification').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dathang').forEach(button => {
        button.addEventListener('click', showNotification);
    });
});
