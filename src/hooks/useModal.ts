import { useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    // console.log(isOpen);
    return {
        isOpen,
        openModal,
        closeModal
    }
}