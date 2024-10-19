import React from 'react'
import LightButton from "../../src/assets/website/light-mode-button.png"
import DarkButton from "../../src/assets/website/dark-mode-button.png"

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement
    console.log(element)

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark")
            element.classList.add("dark")
        } else {
            element.classList.remove("light")
            element.classList.remove("dark")
        }

    })
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt="Light mode button"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkButton}
        alt="Dark mode button"
        className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}

export default DarkMode