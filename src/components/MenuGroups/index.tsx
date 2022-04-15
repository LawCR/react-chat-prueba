import { useAppSelector } from "../../reducers/hooks"
import { FC } from "react";
import { MenuGroupsContainer } from "./MenuGroupsElements";


export const MenuGroups: FC = ({children}) => {

  const {showMenuGroups} = useAppSelector(state => state.ui)

  return (
    <MenuGroupsContainer showMenu={showMenuGroups} >
        {children}
    </MenuGroupsContainer>
  )
}
