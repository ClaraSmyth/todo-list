import { openEditModal } from './modal';
import { removeTodo, updateStatus } from './todos';

const createDiv = (className) => {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
};

const createH2 = (className) => {
    const h2 = document.createElement('h2');
    h2.classList.add(className);
    return h2;
};

const createPara = (className) => {
    const para = document.createElement('p');
    para.classList.add(className);
    return para;
};

const createBtn = (className) => {
    const btn = document.createElement('button');
    btn.classList.add(className);
    return btn;
};

const createInput = (className, inputType) => {
    const input = document.createElement('input');
    input.classList.add(className);
    input.setAttribute('type', inputType);
    return input;
};

const createTodoCard = (todo, index) => {
    const container = createDiv('todo-card');
    const checkbox = createInput('todo-card-input', 'checkbox');
    const title = createPara('todo-card-title');
    const date = createPara('todo-card-date');
    const editBtn = createBtn('todo-card-edit');
    const deleteBtn = createBtn('todo-card-delete');

    checkbox.checked = todo.checked;
    checkbox.addEventListener('click', () => updateStatus(index, checkbox.checked));
    title.innerText = todo.title;
    date.innerText = todo.date;
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', () => openEditModal(todo, index));
    deleteBtn.innerText = 'X';
    deleteBtn.addEventListener('click', () => removeTodo(index));

    container.append(checkbox, title, date, editBtn, deleteBtn);

    return container;
};

export {
    createDiv,
    createH2,
    createPara,
    createBtn,
    createInput,
    createTodoCard,
};
