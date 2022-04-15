// import { nanoid } from "nanoid"
import { Chat, Message } from "../reducers/chatReducer"
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

    let messages: Message[] = []
    
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

export const createChat = (messages: Message[], nameChat: string) => (dispatch: AppDispatch) => {

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

export const deleteChat = (messageId: string, chat: Chat) => (dispatch: AppDispatch) => {

    try {
        

        const newChat = chat

        const newChatErased = newChat.messages.filter(message => message.id !== messageId)

        const chatObject: Chat = {
            ...newChat,
            messages: newChatErased
        }



       
        dispatch({type: '[CHAT] - DELETED MESSAGE', payload: chatObject })
        // localStorage.setItem('groups', JSON.stringify(groups))
    } catch (error) {
        console.log(error)
    }
}