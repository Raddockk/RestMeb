const callMenu = document.querySelector('#call-tablet-menu');
const callRequestBtn = document.querySelector('#call-request');
const callRequestOverlay = callMenu.querySelector('#call-overlay');


function handleOpenMenu(e) {
    if (window.innerWidth < 951) {
        e.preventDefault();
        callMenu.classList.toggle('modal-window_active');
    }
}

function handleCloseMenu(e) {
    callMenu.classList.remove('modal-window_active');
    e.preventDefault();
}

callRequestBtn.addEventListener('click', handleOpenMenu);
callRequestOverlay.addEventListener('click', handleCloseMenu);
