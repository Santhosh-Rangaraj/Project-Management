import { PanelLeft,Bell,Sun } from 'lucide-react';
import '../../styles/TopNavbar.css'



const TopNavbar=()=>{
    return (
    
        <header className="top-navbar">
            <PanelLeft size={25} />
            <input type="text" placeholder="Search..." className="search-input" />
            <div className="left-section">
                <Bell size={25}></Bell>
                <Sun size={25}  />
            </div>
        </header>
        
    )
}

export default TopNavbar;