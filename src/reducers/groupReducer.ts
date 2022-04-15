import { User } from "./usersReducer"

export interface Group {
    id: string,
    name: string,
    members: User[],
    category: string
}

// export type Categories = '' | 'Deportes' | 'Peliculas' | 'Tecnologia' | 'Gastronomia'

interface GroupsState{
    groups: Group[],
    groupSelected?: Group | null,
    myGroup: Group | null,
    categorySeleted: string
}

const initialState: GroupsState = {
    groups: [],
    groupSelected: null,
    myGroup: null,
    categorySeleted: 'Deportes'
}

type GroupActionType = 
| {type: '[GROUP] - GET GROUPS', payload: Group[] }
| {type: '[GROUP] - SEARCH ALL GROUPS', payload: Group[] }
| {type: '[GROUP] - SEARCH GROUP', payload: string }
| {type: '[GROUP] - CREATE GROUP', payload: Group }
| {type: '[GROUP] - DELETE GROUP', payload: Group }
| {type: '[GROUP] - SELECTED CATEGORY', payload: string }

export const groupReducer = (state: GroupsState = initialState, action: GroupActionType): GroupsState => {
    switch (action.type) {
        case '[GROUP] - GET GROUPS':
            return {
                ...state,
                groups: [...action.payload],
            }
        case '[GROUP] - SEARCH ALL GROUPS':
            return {
                ...state,
                groups: [...action.payload]
            }
        case '[GROUP] - SEARCH GROUP':
            return {
                ...state,
                groups: state.groups.filter(group => group.name.includes(action.payload))
            }
        case '[GROUP] - CREATE GROUP':
            return {
                ...state,
                groups: [...state.groups, action.payload]
            }
        case '[GROUP] - DELETE GROUP':
            return {
                ...state,
                groups: state.groups.filter(group => group.id !== action.payload.id)
            }
        case '[GROUP] - SELECTED CATEGORY':
            return {
                ...state,
                categorySeleted: action.payload
            }

        default:
            return state;
    }
}