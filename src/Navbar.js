import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import "./Navbar.css"
function Navbar() {
    const [ show , handleShow ] = useState(false);
    const history = useHistory();
    const transitionNavbar = () =>{
        if ( window.scrollY > 100 ){
            handleShow(true);
        } else {
          handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])
    return (
        <div className={`navbar ${show && 'navbar__black'}`}>
            <div className="navbar__contents"> 
              <img onClick={() => history.push('/')} className="navbar__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt=""/>
              <img onClick={() => history.push('/profile')} className="navbar__avatar"  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt=""/>
            
            </div>
            
        </div>
    )
}

export default Navbar
