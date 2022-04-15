
import { FC } from 'react';
import { User } from '../../reducers/usersReducer';
import { UserListItemContainer, UserListItemImg, UserListItemName, UserListItemNameContainer, UserListItemNameLight } from './UserListItemElements';
import { useDispatch } from 'react-redux';
import { selectChat } from '../../actions/chatsActions';

interface Props {
  user: User
}

export const UserListItem: FC<Props> = ({user}) => {

  const dispatch = useDispatch()

  const onSelectChatUser = (user: User) => {
    dispatch(selectChat(user.id))
  }

  return (
    <UserListItemContainer onClick={() => onSelectChatUser(user)}>
        <UserListItemImg src="https://i.pinimg.com/736x/f2/7d/be/f27dbeadf027a924b82d5300cd14b2e9.jpg" alt="avatar" />
        <UserListItemNameContainer>
            <UserListItemName>{user.name}</UserListItemName>
            <UserListItemNameLight>En linea</UserListItemNameLight>
        </UserListItemNameContainer>
    </UserListItemContainer>
  )
}
