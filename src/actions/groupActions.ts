import { AppDispatch } from "../store"
import { nanoid } from "nanoid";
import { Group } from '../reducers/groupReducer';


export const getGroups = () => (dispatch: AppDispatch) => {
    try {
        const groups = JSON.parse(localStorage.getItem('groups') || '[]')
        dispatch({type: '[GROUP] - GET GROUPS', payload: groups })
    } catch (error) {
        console.log(error)
    }
}

export const getAllGroups = () => (dispatch: AppDispatch) => {
    try {
        const groups = JSON.parse(localStorage.getItem('groups') || '[]')
        dispatch({type: '[GROUP] - SEARCH ALL GROUPS', payload: groups })
    } catch (error) {
        console.log(error)
    }
}


export const searchGroup = (group: string) => (dispatch: AppDispatch) => {
    try {
        dispatch({type: '[GROUP] - SEARCH GROUP', payload: group })
    } catch (error) {
        console.log(error)
    }
}

export const createGroup = (groupName: string, category: string) => (dispatch: AppDispatch) => {
    const id = nanoid()
    const group: Group = {
        id,
        name: groupName,
        members: [],
        category
    }
    try {
        let groups: Group[] = JSON.parse(localStorage.getItem('groups') || '[]')
        const existGroup = groups.some( g => g.name ===  group.name)
        if (existGroup) return

        groups.push(group)
        dispatch({type: '[GROUP] - CREATE GROUP', payload: group })
        localStorage.setItem('groups', JSON.stringify(groups))
    } catch (error) {
        console.log(error)
    }
}

export const deleteGroup = (group: Group) => (dispatch: AppDispatch) => {
    try {
        let groups: Group[] = JSON.parse(localStorage.getItem('groups') || '[]')
        const newGroups = groups.filter(g => g.id !== group.id)
        dispatch({type: '[GROUP] - DELETE GROUP', payload: group })
        localStorage.setItem('groups', JSON.stringify(newGroups))
    } catch (error) {
        console.log(error)
    }
}

export const selectCategory = (category: string) => (dispatch: AppDispatch) => {
    try {
        dispatch({type: '[GROUP] - SELECTED CATEGORY', payload: category })
    } catch (error) {
        console.log(error)
    }
}