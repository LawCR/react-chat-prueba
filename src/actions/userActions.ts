import { User } from '../reducers/usersReducer';
import { AppDispatch } from '../store';
import { nanoid } from 'nanoid'


export const createDefaultUser = () => (dispatch: AppDispatch) => {
    const id = nanoid()
    const arrayId = id.split('').slice(0,8)
    const nameId = arrayId.join('')
    const user: User = {
        id: `${nameId}`,
        name: `User_${nameId}`,
    }
    
    try {
        let myUserLocal: User = JSON.parse(localStorage.getItem('myUser') || 'null')
        // if (myUserLocal) return
        let users: User[] = JSON.parse(localStorage.getItem('users') || '[]')

        //*Validacion para que no cree mas usuarios
        // const existUser = users.some( user => user.id ===  myUserLocal.id)
        // if (existUser) return

        users.push(user)

        dispatch({type: '[USERS] - DEFAULT USER CREATED', payload: user})
        dispatch({type: '[USERS] - USER ADDED TO LIST', payload: user})
        localStorage.setItem('myUser', JSON.stringify(user))
        localStorage.setItem('users', JSON.stringify(users))
    } catch (error) {
        console.log(error)
    }
}

export const getUsers = () => (dispatch: AppDispatch) => {
    try {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const myUser = JSON.parse(localStorage.getItem('myUser') || 'null')
        const payload = {
            users,
            myUser
        }
        dispatch({type: '[USERS] - GET USERS', payload })
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = () => (dispatch: AppDispatch) => {
    try {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        dispatch({type: '[USERS] - SEARCH ALL USERS', payload: users })
    } catch (error) {
        console.log(error)
    }
}


export const searchUser = (user: string) => (dispatch: AppDispatch) => {
    try {
        dispatch({type: '[USERS] - SEARCH USER', payload: user })
    } catch (error) {
        console.log(error)
    }
}

export const updateUserName = (user: User) => (dispatch: AppDispatch) => {
    try {
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')

        const newUsersList = users.map(u => {
            if(u.id === user.id) return user
            return u
        })


        dispatch({type: '[USERS] - UPDATED USERNAME', payload: user })
        localStorage.setItem('myUser', JSON.stringify(user))
        localStorage.setItem('users', JSON.stringify(newUsersList))
    } catch (error) {
        console.log(error)
    }
}