import uuid from 'uuid/dist/v4';

export const articleReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [...state, {
                id: uuid(),
                title: action.article.title
            }]
        case 'REMOVE_ARTICLE':
            return state.filter(article => article.id !== action.id);
        default:
            return state
    }
}