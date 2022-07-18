import { createBtn, createDiv, createH1, createH3, createPara, createSvg } from './create-dom-elements';
import { openEditProjectModal, openModal } from './modal';
import { removeProject, renderTrashProjects } from './projects';
import { renderTodos } from './todos';

const buildGeneral = () => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH1('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');
    const btnContainer = createDiv('project-controls');
    const createTodoBtn = createBtn('todo-create');
    const sortBtn = createBtn('todo-sort');

    mainContainer.setAttribute('data-id', 'General');
    title.innerText = 'General';
    desc.innerText = 'A general list of random todos.';

    createTodoBtn.append(createSvg('plus'), 'Create Todo');
    createTodoBtn.addEventListener('click', () => openModal());
    sortBtn.innerText = 'All';
    sortBtn.addEventListener('click', () => {
        sortBtn.innerText === 'All' ? (sortBtn.innerText = 'Important') : (sortBtn.innerText = 'All');
        renderTodos();
    });
    btnContainer.append(sortBtn, createTodoBtn);

    mainContainer.textContent = '';
    mainContainer.append(title, desc, btnContainer, todoContainer);

    renderTodos();
};

const buildToday = () => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH1('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');

    mainContainer.setAttribute('data-id', 'Today');
    title.innerText = 'Today';
    desc.innerText = 'All todos dated today';

    mainContainer.textContent = '';
    mainContainer.append(title, desc, todoContainer);

    renderTodos();
};

const buildUpcoming = () => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH1('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');

    mainContainer.setAttribute('data-id', 'Upcoming');
    title.innerText = 'Upcoming';
    desc.innerText = 'All upcoming todos in the next week';

    mainContainer.textContent = '';
    mainContainer.append(title, desc, todoContainer);

    renderTodos();
};

const buildTrash = () => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH1('project-title');
    const desc = createPara('project-desc');
    const todoContainer = createDiv('todo-container');
    const projectContainer = createDiv('project-container');
    const todoSubTitle = createH3('project-subtitle');
    const projectSubTitle = createH3('project-subtitle');

    mainContainer.setAttribute('data-id', 'Trash');
    title.innerText = 'Trash';
    desc.innerText = 'All deleted todos and projects';
    todoSubTitle.innerText = 'Todos';
    projectSubTitle.innerText = 'Projects';

    mainContainer.textContent = '';
    mainContainer.append(title, desc, todoSubTitle, todoContainer, projectSubTitle, projectContainer);

    renderTodos();
    renderTrashProjects();
};

const buildProjectPage = (project, index) => {
    const mainContainer = document.querySelector('.main-container');
    const title = createH1('project-title');
    const desc = createPara('project-desc');
    const titleContainer = createDiv('project-title-container');
    const todoContainer = createDiv('todo-container');
    const btnContainer = createDiv('project-controls');
    const createTodoBtn = createBtn('todo-create');
    const sortBtn = createBtn('todo-sort');
    const delProjectBtn = createBtn('project-delete');
    const editProjectBtn = createBtn('project-edit');

    mainContainer.setAttribute('data-id', index);

    title.innerText = project.title;
    desc.innerText = project.desc;

    createTodoBtn.append(createSvg('plus'), 'Create Todo');
    createTodoBtn.addEventListener('click', () => openModal());
    sortBtn.innerText = 'All';
    sortBtn.addEventListener('click', () => {
        sortBtn.innerText === 'All' ? (sortBtn.innerText = 'Important') : (sortBtn.innerText = 'All');
        renderTodos();
    });

    editProjectBtn.append(createSvg('edit'));
    editProjectBtn.addEventListener('click', () => openEditProjectModal(project));
    delProjectBtn.append(createSvg('delete'));
    delProjectBtn.addEventListener('click', () => removeProject(project, index));
    btnContainer.append(sortBtn, createTodoBtn);

    titleContainer.append(title, editProjectBtn, delProjectBtn);

    mainContainer.textContent = '';
    mainContainer.append(titleContainer, desc, btnContainer, todoContainer);

    renderTodos();
};

export { buildGeneral, buildToday, buildUpcoming, buildTrash, buildProjectPage };
