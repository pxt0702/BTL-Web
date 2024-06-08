let notificationShown = false;

function showNotification() {
    if (!notificationShown) {
        document.getElementById('orderNotification').style.display = 'block';
        document.getElementById('orderNotification').scrollIntoView({ behavior: 'smooth', block: 'start' });
        notificationShown = true;
    }
}

function closeNotification() {
    document.getElementById('orderNotification').style.display = 'none';
    notificationShown = false;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dathang').forEach(button => {
        button.addEventListener('click', showNotification);
    });

    document.getElementById('submit-btn').addEventListener('click', function(event) {
        event.preventDefault(); 
        showNotification();
    });
});
