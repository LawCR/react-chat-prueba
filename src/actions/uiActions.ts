import { AppDispatch } from '../store';

export const toogleMenuUsers = () => (dispatch: AppDispatch) => {
    try {
        dispatch({type: '[UI] - SHOW MENU USERS'})
    } catch (error) {
        console.log(error)
    }
}
export const toogleMenuGroups = () => (dispatch: AppDispatch) => {
    try {
        dispatch({type: '[UI] - SHOW MENU GROUPS'})
    } catch (error) {
        console.log(error)
    }
}