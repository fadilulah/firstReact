import Buttons from "./SidebarButton";
import'./Sidebar.css'
import logo from'./assets/logo.svg'
function Sidebar() {
    return (
        <section className='side-bar'>
            <div>
                <div>
                    <img src={logo} alt="logo" />
                    <p>ALL BOARDS <span>(8)</span></p>
                </div>
                <div>
                    <Buttons />
                    <Buttons />
                    <Buttons />
                    <Buttons />
                </div>
            </div>
            
            <div>
                <img src="" alt="light-icon" />
                <img src="" alt="display-switch" />
                <img src="" alt="dark-icon" />

            </div>
        </section>
    )
}            
export default Sidebar