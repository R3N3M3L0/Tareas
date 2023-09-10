import { useEffect, useState } from "react"
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"

const initialStateDarkMode = localStorage.theme === 'dark' ? true: false

const Header = () => {

    const [darkMode, setDarkMode] = useState(initialStateDarkMode)

    useEffect(() => {

        if(darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        }else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }

    }, [darkMode])

    return (
        <header className="container mx-auto px-4 pt-7 max-w-sd md: max-w-xl">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-widest dark:text-gray-900 ">Tareas</h1>
                <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <SunIcon/>: <MoonIcon/>}</button>
            </div>
        </header>
    )
}
export default Header