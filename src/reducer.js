import { 
    ADD_TODO, 
    REMOVE_TODO,
    UPDATE_TODO,
    TOGGLE_MENU
} from './actions';

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            state.store.add({todo: state.value});
            return {...state, value: ''};
        case REMOVE_TODO:
            state.store.remove(action.record);
            return state;
        case UPDATE_TODO:
            return {...state, value: action.value};
        case TOGGLE_MENU:
            let show = !state.showAppMenu;

            return { ...state, showAppMenu: show };
        default: 
            return state;
    }

}