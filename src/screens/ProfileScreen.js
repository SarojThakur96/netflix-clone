import React ,{useState}from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Navbar from '../Navbar'
import PlanScreen from './PlanScreen'
import "./ProfileScreen.css"
function ProfileScreen() {
   const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
             <Navbar/>
             <div className="profileScreen__body">
                 <h1>Edit Profile</h1>
                 <div className="profileScreen__info">
                     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt=""/>
                     <div className="profileScreen__details">
                         <h2>{user.email}</h2>
                         <div className="profileScreen__plans">
                             <h3>Plans</h3>
                             <PlanScreen  name="Premium" details= "4K + HDR"/>
                             <PlanScreen  name="Basic" details= "720p"/>
                             <PlanScreen name="Standard" details= "1080p"/>
                             <button onClick={() => auth.signOut()} className="profileScreen__signout">Sign Out</button>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default ProfileScreen

