export const todoReducer = (state, action) => {
    switch(action.type){
        case 'addTask':
            return [...state, {
                task: action.todo.task,
                time: action.todo.time,
                id: Math.random() * 50
            }];
        case 'removeTask':
            return state.filter(todo => todo.id !== action.id);
    }
}