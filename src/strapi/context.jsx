import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageId, setPageId] = useState(null);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return <AppContext.Provider value={{pageId,setPageId, isSidebarOpen, openSidebar, closeSidebar}}>{children}</AppContext.Provider>
}

export const useGlobalStrapi = () => {
    return useContext(AppContext);
}



