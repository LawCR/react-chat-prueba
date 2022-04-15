import { KeyboardEvent, MouseEvent, useRef, useState } from 'react';
import { useAppSelector } from '../../reducers/hooks';
import { CategoryList } from '../CategoryList'
import { ChatUserButton, ChatUsersContainer, ChatUsersDivContainer, ChatUsersDivMessage, ChatUsersDivText, ChatUsersImg, ChatUserTextarea, ChatUsersDivMessageContainer, ChatUsersNameContainer, ChatUsersMessage, ChatUsersMessageContainer } from './ChatUsersElemenets';
import { useDispatch } from 'react-redux';
import { createChat, deleteChat } from '../../actions/chatsActions';
import { nanoid } from "nanoid"

export const ChatUsers = () => {
    
    const {chatSelected} = useAppSelector(state => state.chats)
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState('')

    const onCreateMessage = (message:string, e: KeyboardEvent<HTMLTextAreaElement> | MouseEvent<HTMLButtonElement>) => {
        if (message.trim() === '') return
        e.preventDefault();

        const arrayMessages = chatSelected?.messages
        const id = nanoid()
        const newObjectMessage = {
            id,
            message
        } 
        arrayMessages?.push(newObjectMessage)
        
        dispatch(createChat(arrayMessages || [], chatSelected?.name!))
        setNewMessage('')
        inputRef.current?.focus()
    }

    const onDeleteMessage = (messageId:string) => {
        if (!chatSelected) return
        console.log(chatSelected)
        dispatch(deleteChat(messageId, chatSelected))
    }

    return (
    <ChatUsersContainer>
        <CategoryList />
        <ChatUsersNameContainer>

            <h2>{chatSelected?.name}</h2>
            
        </ChatUsersNameContainer>
        <ChatUsersDivContainer>
            
            <ChatUsersDivMessageContainer>
                <div className='chatDivMessagex'>
                    {
                        chatSelected?.messages.map(({message, id}) => (
                            <ChatUsersDivMessage key={id}>
                                <ChatUsersMessageContainer>
                                    <ChatUsersMessage>{message}</ChatUsersMessage>
                                    <svg onClick={() => onDeleteMessage(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </ChatUsersMessageContainer>
                                <ChatUsersImg src="https://i.pinimg.com/736x/f2/7d/be/f27dbeadf027a924b82d5300cd14b2e9.jpg" alt="avatar" />
                            </ChatUsersDivMessage>
                        ))
                    }
                </div>
            </ChatUsersDivMessageContainer>
            
            <ChatUsersDivText>
                <ChatUserTextarea 
                    ref={inputRef} rows={2}  placeholder='Escribe un mensaje aquí'
                    value={newMessage} name='newMessage' onChange={(e) => setNewMessage(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' ? onCreateMessage(newMessage, e) : null}
                />  
                <ChatUserButton onClick={(e) => onCreateMessage(newMessage, e)}>Send</ChatUserButton>
            </ChatUsersDivText>
        </ChatUsersDivContainer>
        
    </ChatUsersContainer>
    )
}
