import { useAppSelector } from "../../reducers/hooks"
import { MenuContainer, MenuContainerCerrar, MenuContainerLi, MenuContainerUl } from "./MenuElements"
import { useDispatch } from 'react-redux';
import { toogleMenuUsers } from '../../actions/uiActions';
import { UserList } from '../UserList/index';
import { FC } from "react";


interface Props {
  showMenu: boolean;
}
export const Menu: FC = ({children}) => {

  const {showMenuUsers} = useAppSelector(state => state.ui)

  const dispatch = useDispatch()

  // const onToogleMenu = () => {
  //   dispatch(toogleMenuGroups())
  // }


  return (
    <MenuContainer showMenu={showMenuUsers} >
        {children}
        {/* <UserList modeMobile={value} /> */}
    </MenuContainer>
  )
}
