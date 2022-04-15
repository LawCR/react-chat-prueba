import { KeyboardEvent, MouseEvent, useRef, useState } from 'react';
import { useAppSelector } from '../../reducers/hooks';
import { CategoryList } from '../CategoryList'
import { ChatUserButton, ChatUsersContainer, ChatUsersDivContainer, ChatUsersDivMessage, ChatUsersDivText, ChatUsersImg, ChatUsersName, ChatUserTextarea, ChatUsersDivMessageContainer, ChatUsersNameContainer } from './ChatUsersElemenets';
import { useDispatch } from 'react-redux';
import { createChat } from '../../actions/chatsActions';


export const ChatUsers = () => {
    
    const {chatSelected} = useAppSelector(state => state.chats)
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState('')

    const onCreateMessage = (message:string, e: KeyboardEvent<HTMLTextAreaElement> | MouseEvent<HTMLButtonElement>) => {
        if (message.trim() === '') return
        e.preventDefault();

        const arrayMessages = chatSelected?.messages
        arrayMessages?.push(message)
        
        dispatch(createChat(arrayMessages || [], chatSelected?.name!))
        setNewMessage('')
        inputRef.current?.focus()
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
                        chatSelected?.messages.map((message, index) => (
                            <ChatUsersDivMessage key={index}>
                                <ChatUsersName>{message}</ChatUsersName>
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
