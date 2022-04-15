import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { getAllUsers, searchUser } from "../../actions/userActions"
import { useAppSelector } from "../../reducers/hooks"
import { Search } from "../Search"
import { UserListItem } from "../UserListItem"
import { UserListContainer, UserListItemContainer, UserListTitle } from "./UserListElements"

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
      <div>
        <UserListTitle>User List</UserListTitle>
      </div>
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
