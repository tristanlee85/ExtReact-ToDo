export const ADD_TODO = 'ADD_TODO',
    UPDATE_TODO = 'UPATE_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    TOGGLE_MENU = 'TOGGLE_MENU';

export function addTodo() {
    return {
        type: ADD_TODO
    };
}

export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        value: todo.getValue()
    }
}

export function removeTodo(record) {
    return {
        type: REMOVE_TODO,
        record
    };
}

export function toggleAppMenu (show) {
    return {
        type: TOGGLE_MENU,
        show
    }
}