import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [IsOpenSidbar, setIsOpenSidbar] = useState(false);
    const [IsOpenModal, setIsOpenModal] = useState(false);

    const openSidbar = () => {
        setIsOpenSidbar(true)
    }

    const closeSidbar = () => {
        setIsOpenSidbar(false)
    }

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return <AppContext.Provider value={{IsOpenSidbar,IsOpenModal,openSidbar,closeSidbar,openModal,closeModal}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}