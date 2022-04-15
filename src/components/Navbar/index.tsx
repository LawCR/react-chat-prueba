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
        {/* <NavMenuGroups onClick={onToogleMenuGroups}>Grupos</NavMenuGroups> */}
        <NavMenuContainer >
            <NavMenuGroups onClick={onToogleMenuGroups} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </NavMenuGroups>
            <div onClick={openModal}>
              <NavMenuUserImg src="https://i.pinimg.com/736x/f2/7d/be/f27dbeadf027a924b82d5300cd14b2e9.jpg" alt="avatar" />
              <h2>{myUser?.name}</h2>
            </div>
            {/* <p onClick={onToogleMenuUsers}>Usuarios</p> */}
            <svg onClick={onToogleMenuUsers} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
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
