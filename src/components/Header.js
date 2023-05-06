// import Logo "../Assests/"

const Header = ({themeActive,setThemeActive}) => {
  

  return (
    <header>
        <div className="logo">
            <img src="https://raw.githubusercontent.com/ShubhamSarda/taskmate-react/7a0d31091ac65ffc3182bc6ae72998dcdd8ef77f/src/assets/logo.svg" alt="TaskMate Logo" />
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