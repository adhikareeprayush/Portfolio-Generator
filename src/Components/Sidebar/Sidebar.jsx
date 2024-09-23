import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClone} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return(
        <div className='Sidebar'>
            <div className="side-menus active">
                <FontAwesomeIcon className='icon' icon={faClone} />
                <span>Templates</span>
            </div>
            <div className="side-menus">
                <FontAwesomeIcon className='icon' icon={faClone} />
                <span>Templates</span>
            </div>
            <div className="side-menus">
                <FontAwesomeIcon className='icon' icon={faClone} />
                <span>Templates</span>
            </div>
            <div className="side-menus">
                <FontAwesomeIcon className='icon' icon={faClone} />
                <span>Templates</span>
            </div>
            <div className="side-menus">
                <FontAwesomeIcon className='icon' icon={faClone} />
                <span>Templates</span>
            </div>
            <div className="side-menus">
                <FontAwesomeIcon className='icon' icon={faClone} />
                <span>Templates</span>
            </div>
        </div>
    )
}

export default Sidebar;