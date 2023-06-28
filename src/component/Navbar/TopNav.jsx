import React, { useContext } from 'react'
import './TopNav.css'
import { useNavigate } from 'react-router-dom';
import cart from '../../img/cartImg.png'
import prof from '../../img/profile.png'
import { AuthContext } from '../../context/AuthContext';
function TopNav() {
   const {currentUser} = useContext(AuthContext)
    const navigate = useNavigate(); 
    const handleclick = () => {
      if(currentUser===null){
         alert("Please login to continue");
         navigate('/login');
         
       }
       else navigate('/cartM')
    }

    const handleclickProf = () => {
      if(currentUser===null){
         alert("Please login to continue");
         navigate('/login');
         
       }
       else navigate('/profile')
     }
  return (
    <div className='bckg'>
     <div className='d-flex justify-content-end p-2'>
     <img src={prof} className='h-18' onClick={handleclickProf} />
        <img src={cart} className='h-18 ms-4 me-3' onClick={handleclick} />
       

     </div>
    </div>
  )
}

export default TopNav
