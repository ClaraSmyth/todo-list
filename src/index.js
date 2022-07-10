import { buildGeneral, buildToday, buildTrash, buildUpcoming } from './modules/build-pages.js';
import { openProjectModal } from './modules/modal.js';
import { renderProjectNav } from './modules/projects.js';

const navBtn = document.querySelector('.header-nav-btn');
const navLinks = document.querySelectorAll('.header-main-nav-link');

navBtn.addEventListener('click', () => {
    openProjectModal();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        switch (link.innerText) {
            case 'General':
                buildGeneral();
                break;
            case 'Today':
                buildToday();
                break;
            case 'Upcoming':
                buildUpcoming();
                break;
            case 'Trash':
                buildTrash();
                break;
        };
    });
});

renderProjectNav()
buildGeneral();