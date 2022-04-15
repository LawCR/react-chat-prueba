import { nanoid } from "nanoid"
import { Chat } from "../reducers/chatReducer"
import { AppDispatch } from "../store"


export const getChats = () => (dispatch: AppDispatch) => {

    try {
        let chats: Chat[] = JSON.parse(localStorage.getItem('chats') || '[]')
        dispatch({type: '[CHAT] - GETS CHATS', payload: chats })
    } catch (error) {
        console.log(error)
    }
}

export const selectChat = (userIdOrGroupName: string) => (dispatch: AppDispatch) => {

    let chatsLocal: Chat[] = JSON.parse(localStorage.getItem('chats') || '[]')

    let messages: string[] = []
    
    const existeChat = chatsLocal.find(chat => chat.id === userIdOrGroupName)
    if (existeChat) {
        messages = existeChat.messages
    }
    
    const chat: Chat = {
        id: userIdOrGroupName,
        name: userIdOrGroupName,
        messages
    }

    try {
        dispatch({type: '[CHAT] - SELECTED CHAT', payload: chat })
    } catch (error) {
        console.log(error)
    }
}

export const createChat = (messages: string[], nameChat: string) => (dispatch: AppDispatch) => {

    try {
        // let chats: Chat[] = JSON.parse(localStorage.getItem('chats') || '[]')
        // const existGroup = groups.some( g => g.name ===  group.name)
        // if (existGroup) return

        const chat: Chat = {
            id: nameChat,
            name: `${nameChat}`,
            messages
        }

        dispatch({type: '[CHAT] - CREATED MESSAGE', payload: chat })
        // localStorage.setItem('groups', JSON.stringify(groups))
    } catch (error) {
        console.log(error)
    }
}