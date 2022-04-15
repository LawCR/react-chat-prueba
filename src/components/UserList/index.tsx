import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { getAllUsers, searchUser } from "../../actions/userActions"
import { useAppSelector } from "../../reducers/hooks"
import { Search } from "../Search"
import { UserListItem } from "../UserListItem"
import { IconRefresh, UserListContainer, UserListItemContainer, UserListTitle, UserListTitleContainer } from "./UserListElements"

interface Props {
  modeMobile?: boolean
}

export const UserList: FC<Props> = ({modeMobile}) => {
  const {users} = useAppSelector(state => state.users)
  const dispatch = useDispatch()


  const [search, setSearch] = useState("")

  const onSearch = (search:string) => {
    if (search.trim() === '') {
      dispatch(getAllUsers())
      return
    }
    dispatch(getAllUsers())
    dispatch(searchUser(search))
    setSearch('')
  }


  return (
    <UserListContainer mobile={modeMobile ? modeMobile : false }>
      <UserListTitleContainer>
        <UserListTitle>Lista de Usuarios</UserListTitle>
        <IconRefresh onClick={()=>dispatch(getAllUsers())}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </IconRefresh>
      </UserListTitleContainer>
      <Search search={search} setSearch={setSearch} onSearch={onSearch} />
      <UserListItemContainer>
        {
          users.map(user => (
            <UserListItem user={user} key={user.name} />
          ))
        }
        
      </UserListItemContainer>
    </UserListContainer>
  )
}
