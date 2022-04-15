import { FC, useRef } from 'react'
import { useModal } from '../../hooks/useModal';
import { ModalContainer } from './ModalElements';


export const Modal: FC = ({ children } ) => {
    // const modal = useRef<HTMLDivElement>(null)
    
    // using cutom hook
    const { isOpen, closeModal } = useModal();
    // const handleCLose = () => {
    //     if (modal.current === refInputContainer.current) {
    //         console.log('prueba dentro')
    //     }
    //     console.log('prueba fiera')
    //     closeModal()
    // }
    return (
        <ModalContainer>
                {children}
        </ModalContainer>
    )
}