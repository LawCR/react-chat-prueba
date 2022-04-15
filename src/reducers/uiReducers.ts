

interface UIState{
    showMenuUsers: boolean,
    showMenuGroups: boolean,
}

const initialState: UIState = {
    showMenuUsers: false,
    showMenuGroups: false,
}

type UIActionType = 
| {type: '[UI] - SHOW MENU USERS' }
| {type: '[UI] - SHOW MENU GROUPS' }

export const uiReducer = (state: UIState = initialState, action: UIActionType): UIState => {
    switch (action.type) {
        case '[UI] - SHOW MENU USERS':
            return {
                ...state,
                showMenuUsers: !state.showMenuUsers
            }
        case '[UI] - SHOW MENU GROUPS':
            return {
                ...state,
                showMenuGroups: !state.showMenuGroups
            }

        default:
            return state;
    }
}