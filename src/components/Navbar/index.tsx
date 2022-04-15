import { Nav, NavInput, NavInputContainer, NavLink, NavMenuContainer, NavMenuUserImg, NavInputButton, NavInputButtonContainer, NavMenuGroups } from './NavbarElements';
import { useDispatch } from "react-redux";
import { toogleMenuUsers, toogleMenuGroups } from '../../actions/uiActions';
import { createDefaultUser, updateUserName } from "../../actions/userActions";
import { useEffect, useState, useRef } from 'react';
import { useAppSelector } from "../../reducers/hooks";
import { useModal } from '../../hooks/useModal';
import { Modal } from "../Modal";



export const Navbar = () => {
  const {myUser} = useAppSelector(state => state.users)
  const dispatch = useDispatch()

  const {isOpen ,openModal, closeModal} = useModal()
  
  const [newUserName, setNewUserName] = useState('')

  const onToogleMenuUsers = () => {
    dispatch(toogleMenuUsers())
  }
  const onToogleMenuGroups = () => {
    dispatch(toogleMenuGroups())
  }

  const onCreateDefaultUser = () => {
    dispatch(createDefaultUser())
  }
  const onUpdateName = (newUserName: string) => {

    if (newUserName.trim().length === 0) return
    if (!myUser) return
    let newUser = {...myUser}
    newUser.name = newUserName
    

    dispatch(updateUserName(newUser))
    closeModal()
  }

  useEffect(() => {
    onCreateDefaultUser()
  }, [])

  return (
    <Nav>
        <NavLink>IDSocial</NavLink>
        <NavMenuGroups onClick={onToogleMenuGroups}>Grupos</NavMenuGroups>
        <NavMenuContainer >
            <div onClick={openModal}>
              <NavMenuUserImg src="https://i.pinimg.com/736x/f2/7d/be/f27dbeadf027a924b82d5300cd14b2e9.jpg" alt="avatar" />
              <h2>{myUser?.name}</h2>
            </div>
            <p onClick={onToogleMenuUsers}>Usuarios</p>
        </NavMenuContainer>
        {
          isOpen ?
          <Modal>
              <NavInputContainer>
                <h2>Actualizar nombre de usuario</h2>
                <div>
                  <NavInput type="text" placeholder="Ingresa tu nuevo nombre" 
                    name='newUserName' value={newUserName} 
                    onChange={(e) => setNewUserName(e.target.value)} 
                    // onKeyDown={(e) => e.key === 'Enter' ? onUpdateName(newUserName) : null}
                  />
                  <NavInputButtonContainer>
                    <NavInputButton disabled={newUserName.length === 0 ? true : false} onClick={() => onUpdateName(newUserName)}>Crear</NavInputButton>
                    <NavInputButton buttonColor='#a51d1d' onClick={closeModal}>Cerrar</NavInputButton>
                  </NavInputButtonContainer>
                </div>
              </NavInputContainer>
          </Modal>
          : <></>
        }
        
    </Nav>
  )
}
