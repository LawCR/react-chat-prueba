import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { getChats } from '../actions/chatsActions';
import { getGroups } from '../actions/groupActions';
import { getUsers } from "../actions/userActions"

import { ChatUsers } from "../components/ChatUsers"
import { GroupList } from "../components/GroupList"
import { Menu } from "../components/Menu"
import { MenuGroups } from '../components/MenuGroups';
import { Navbar } from "../components/Navbar"
import { UserList } from "../components/UserList"
import { useAppSelector } from '../reducers/hooks';

import { UserPageContainer } from "./UsersPageElements"



const UsersPage = () => {

  const dispatch = useDispatch()
  const {chats} = useAppSelector(state => state.chats)

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getGroups())
    dispatch(getChats())
  }, [])

  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem('chats', JSON.stringify(chats))
    } 
  }, [chats])
  

  return (
    <div>
        <Navbar />
        <MenuGroups>
          <GroupList modeMobile={true} />
        </MenuGroups>
        <Menu>
          <UserList modeMobile={true} />
        </Menu>
        

        <UserPageContainer>
          <GroupList />
          <ChatUsers />
          <UserList />
        </UserPageContainer>
        
    </div>
  )
}

export default UsersPage