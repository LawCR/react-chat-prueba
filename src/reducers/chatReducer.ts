
// TODO: El mensaje no tiene id, se necesitara crear un interface para ello, y modificar todo lo que use messages tipo string[]

// interface Message {
//     id: string,
//     message: string
// }

export interface Chat {
    id: string,
    name: string,
    messages: string[]
}

interface ChatsState{
    chats: Chat[],
    chatSelected: Chat | null,
    // myChat: Chat | null,
}

const initialState: ChatsState = {
    chats: [],
    chatSelected: null,
}


type ChatActionType = 
| {type: '[CHAT] - GETS CHATS', payload: Chat[] }
| {type: '[CHAT] - SELECTED CHAT', payload: Chat }
| {type: '[CHAT] - CREATED MESSAGE', payload: Chat }



export const chatReducer = (state: ChatsState = initialState, action: ChatActionType): ChatsState => {
    switch (action.type) {
        case '[CHAT] - GETS CHATS':
            return {
                ...state,
                chats: [...action.payload]
            }

        case '[CHAT] - SELECTED CHAT':
            return {
                ...state,
                chatSelected: action.payload,
                // chats: [...state.chats, action.payload]
                chats: state.chats.some(chat => chat.id === action.payload.id) ? state.chats : [...state.chats, action.payload]
            }

        case '[CHAT] - CREATED MESSAGE':
            return {
                ...state,
                chatSelected: action.payload,
                chats: state.chats.map(chat => {
                    if (chat.id === action.payload.id) return action.payload
                    return chat
                })
            }
        

        default:
            return state;
    }
}