import { createContext } from "react"

const globalApp = createContext()

const Context = ({ children }) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <globalApp.Provider
            value={{
                handleClick
            }}
        >
            {children}
        </globalApp.Provider>
    )
}

export { Context, globalApp }