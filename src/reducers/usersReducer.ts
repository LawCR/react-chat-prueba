
export interface User {
    id: string,
    name: string
}

interface UsersState{
    users: User[],
    userSelected?: User | null,
    myUser: User | null,
}

const initialState: UsersState = {
    users: [],
    userSelected: null,
    myUser: null
}

interface userUser {
    users: User[],
    myUser: User | null,
}



type UsersActionType = 
| {type: '[USERS] - GET USERS', payload: userUser}
| {type: '[USERS] - DEFAULT USER CREATED', payload: User }
| {type: '[USERS] - USER ADDED TO LIST', payload: User }
| {type: '[USERS] - SEARCH USER', payload: string }
| {type: '[USERS] - SEARCH ALL USERS', payload: User[]}
| {type: '[USERS] - UPDATED USERNAME', payload: User}

//* ACTIONS
// Crear un nuevo USERS al entrar al navegador
// Escribir a otro usuario al privado
// Escribir en chat grupales por categoria (categorias ya existentes)
// Poder cambiar mi nick anonimo a uno propio
// Buscar usuarios y grupos
// Crear Chat grupales
// Eliminar mensajes

//* Features
// Chat Grupal por Categoria
// Chat Privado de usuario a usuario
// Lista de todos los usuarios existentes 
// ! Lista de mis chat existentes
// Buscador de usuarios y grupos

export const usersReducer = (state: UsersState = initialState, action: UsersActionType): UsersState => {
    switch (action.type) {
        case '[USERS] - GET USERS':
            return {
                ...state,
                users: [...action.payload.users],
                myUser: action.payload.myUser
            }
        case '[USERS] - DEFAULT USER CREATED':
            return {
                ...state,
                myUser: action.payload
            }
        case '[USERS] - USER ADDED TO LIST':
            return {
                ...state,
                users: [...state.users, action.payload ]
                // state.groups.filter(group => group.name.includes(action.payload))
            }
        case '[USERS] - SEARCH USER':
            return {
                ...state,
                users: state.users.filter(user => user.name.includes(action.payload))
            }
        case '[USERS] - SEARCH ALL USERS':
            return {
                ...state,
                users: action.payload
            }
        case '[USERS] - UPDATED USERNAME':
            return {
                ...state,
                myUser: action.payload,
                users: state.users.map(user => {
                    if(user.id === action.payload.id) return action.payload
                    return user
                })
                // users: action.users.map()
            }
        default:
            return state;
    }
}