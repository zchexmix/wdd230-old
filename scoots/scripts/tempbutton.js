document.addEventListener('DOMContentLoaded', function () {
    var closeButton = document.getElementById('close-button');
    var messageContainer = document.getElementById('message-container');

    closeButton.addEventListener('click', function () {
        messageContainer.style.display = 'none';
    });
});