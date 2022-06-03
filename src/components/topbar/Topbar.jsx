import './topbar.scss'
import { Person, Email } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+44 924 12 74</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span>kai@kaiconsulting.co</span>
                    </div>
                </div>
                <h1></h1>
                <div className="right">
                    
                </div>
            </div>
        </div>
    )
}
