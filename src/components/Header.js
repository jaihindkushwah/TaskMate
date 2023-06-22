// import Logo "../Assests/"
import logo from "./logo192.png"

const Header = ({themeActive,setThemeActive}) => {
  

  return (
    <header>
        <div className="logo">
            <img src={logo} alt="TaskMate Logo" />
            <span>TaskMate</span>
        </div>
        <div className="themeSelector">
            <span className={"light"===themeActive?"light activeTheme":'light'} onClick={()=>{setThemeActive("light")}}></span>
            <span className={"medium"===themeActive?"medium activeTheme":'medium'} onClick={()=>{setThemeActive("medium")}}></span>
            <span className={"dark"===themeActive?"dark activeTheme":'dark'} onClick={()=>{setThemeActive("dark")}}></span>
            <span className={"gradientOne"===themeActive?"gradientOne activeTheme":'gradientOne'} onClick={()=>{setThemeActive("gradientOne")}}></span>
            <span className={"gradientTwo"===themeActive?"gradientTwo activeTheme":'gradientTwo'} onClick={()=>{setThemeActive("gradientTwo")}}></span>
            <span className={"gradientThree"===themeActive?"gradientThree activeTheme":'gradientThree'} onClick={()=>{setThemeActive("gradientThree")}}></span>
        </div>
    </header>
  )
}

export default Header