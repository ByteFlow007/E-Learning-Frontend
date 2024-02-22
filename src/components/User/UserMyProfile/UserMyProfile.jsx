import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
function UserMyProfile() {
  const [username, setUsername] = useState(null);
  const [oldPassword,setOldPassword]=useState(null);
  const [newPassword,setNewPassword]=useState(null);
  const [confirmPassword,setConfirmPassword]=useState(null);

  const updatePassword=()=>{
  const response=axios.put("https://elearningbackend-ztzn.onrender.com/admin/update/adminId")
  
  }
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      let decodedToken = jwtDecode(token);
      setUsername(decodedToken.usernameOrEmail); // Replace 'role' with the actual claim name
    }
  }, []);

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      
    {username}
   {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Change Password</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box grid gap-4">
    <h3 className="font-bold text-lg items-center justify-center">Change Password</h3>
    <div className="grid gap-4">
    <input className='currentPassword' placeholder='Current Password' onChange={(e)=>{setOldPassword(e.target.value)}}/>
    <input className='newPassword' placeholder='New Password' onChange={(e)=>{setNewPassword(e.target.value)}}/>
    <input className='confirmPassword' placeholder='Confirm Password' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
    <button className='btn btn-primary' onClick={updatePassword}>Update Password</button>
    </div>
   
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
   
    </div>
  );
}

export default UserMyProfile;
