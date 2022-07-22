import { createTodoCard } from './create-dom-elements';
import { format, compareAsc, addDays, eachDayOfInterval } from 'date-fns';

const LOCAL_STORAGE_TODO_KEY = 'todolist.todos';
const todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_KEY)) || [];
// const todos = [
//     {
//         type: 'General',
//         checked: false,
//         title: 'Todo-Title',
//         date: '2022-07-20',
//         isImportant: true,
//         isTrash: false,
//     },
//     {
//         type: 'General',
//         checked: false,
//         title: 'Todo-Title2',
//         date: '2022-07-21',
//         isImportant: false,
//         isTrash: false,
//     },
//     {
//         type: '0',
//         checked: false,
//         title: 'Todo-Title3',
//         date: '2022-07-22',
//         isImportant: false,
//         isTrash: false,
//     },
//     {
//         type: 'General',
//         checked: false,
//         title: 'Todo-Title4',
//         date: '2022-07-22',
//         isImportant: true,
//         isTrash: false,
//     },
//     {
//         type: 'General',
//         checked: false,
//         title: 'Trash-Todo',
//         date: '2022-07-22',
//         isImportant: false,
//         isTrash: true,
//     },
//     { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', isImportant: false, isTrash: false },
//     { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', isImportant: false, isTrash: false },
//     { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', isImportant: false, isTrash: false },
//     { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', isImportant: false, isTrash: false },
//     { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', isImportant: false, isTrash: false },
//     { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', isImportant: false, isTrash: false },
//     { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', isImportant: false, isTrash: false },
//     { type: 'General', checked: false, title: 'Todo-Title', date: '2022-07-20', isImportant: false, isTrash: false },
// ];

const saveTodos = () => {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos));
};

const todoFactory = (type, title, date, isImportant) => {
    const checked = false;
    const isTrash = false;
    return { type, checked, title, date, isImportant, isTrash };
};

const createTodo = (type, title, date, isImportant) => {
    const newTodo = todoFactory(type, title, date, isImportant);
    todos.push(newTodo);
    renderTodos();
};

const editTodo = (index, title, date, isImportant) => {
    const currentTodo = todos[index];
    currentTodo.title = title;
    currentTodo.date = date;
    currentTodo.isImportant = isImportant;
    renderTodos();
};

const updateStatus = (index, value) => {
    todos[index].checked = value;
    updateStatusTimeout.setup();
};

const updateStatusTimeout = {
    reset() {
        this.timeoutID = undefined;
    },

    setup() {
        if (typeof this.timeoutID === 'number') {
            this.cancel();
        }

        this.timeoutID = setTimeout(
            function () {
                renderTodos();
                this.reset();
            }.bind(this),
            2000
        );
    },

    cancel() {
        clearTimeout(this.timeoutID);
    },
};

const removeTodo = (todo) => {
    if (todo.isTrash) {
        todos.splice(todo.index, 1);
        renderTodos();
    } else {
        todos[todo.index].isTrash = true;
        renderTodos();
    }
};

const removeAllProjectTodos = (project) => {
    todos.forEach((todo, index) => {
        if (todo.type == project.iD) {
            todos.splice(index, 1);
        }
    });
};

const restoreTodo = (todo) => {
    todos[todo.index].isTrash = false;
    renderTodos();
};

const renderTodos = () => {
    const currentPage = document.querySelector('.main-container').getAttribute('data-id');
    const todoContainer = document.querySelector('.todo-container');
    const filteredTodos = filterTodos(currentPage);
    todoContainer.textContent = '';
    filteredTodos.forEach((todo) => createTodoCard(todo));
    saveTodos();
};

const filterTodos = (currentPage) => {
    const sortBtn = document.querySelector('.todo-sort');
    const filteredTodos = todos.filter((todo, index) => {
        todo.index = index;
        switch (currentPage) {
            case 'Today':
                return (
                    todo.date === format(new Date(), 'yyyy-MM-dd') && todo.isTrash === false && todo.checked === false
                );
            case 'Upcoming':
                const dates = getDates();
                return dates.includes(todo.date) && todo.isTrash === false && todo.checked === false;
            case 'Completed':
                return todo.checked === true && todo.isTrash === false;
            case 'Trash':
                return todo.isTrash === true;
            default:
                if (sortBtn && sortBtn.innerText === 'Important') {
                    return (
                        todo.type === currentPage &&
                        todo.isTrash === false &&
                        todo.isImportant === true &&
                        todo.checked === false
                    );
                }
                return todo.type === currentPage && todo.isTrash === false && todo.checked === false;
        }
    });

    filteredTodos.sort((a, b) => {
        return compareAsc(new Date(a.date), new Date(b.date));
    });
    return filteredTodos;
};

const getDates = () => {
    const dates = eachDayOfInterval({
        start: addDays(new Date(), 1),
        end: addDays(new Date(), 7),
    });

    dates.forEach((date, index) => dates.splice(index, 1, format(date, 'yyyy-MM-dd')));
    return dates;
};

export { todos, createTodo, removeTodo, removeAllProjectTodos, restoreTodo, editTodo, updateStatus, renderTodos };
