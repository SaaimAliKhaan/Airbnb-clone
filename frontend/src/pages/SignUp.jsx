import React, { useState, useContext } from 'react'
import { userDataContext } from '../Context/UserContext'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';

function SignUp() {
  let [show, setShow] = useState(false)
  let navigate = useNavigate() // useNavigate is a hook from react-router-dom that allows us to navigate to different web pages programmatically. We can use it to navigate to the login page when the user clicks on the "Log in" text.
  let { serverUrl } = React.useContext(authDataContext) // we are using useContext hook to get the serverUrl from the AuthDataContext. This serverUrl will be used to make API calls to the backend server.
  let {userData, setUserData} = useContext(userDataContext)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  const handleSignUp = async (e) => {
    try {
      e.preventDefault() // isse form submit hone par page reload nahi hoga 
      let result = await axios.post(serverUrl + "/api/auth/signup", {
        name: name,
        email: email,
        password: password
      },
        {
          withCredentials: true
        }
      )
      setUserData(result.data)
      navigate("/")
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center '>
      <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/")}>
        <FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' />
      </div>
      <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]' onSubmit={handleSignUp}>
        <h1 className='text-[30px] text-[black]'>Welcome to Airbnb</h1>
        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]'>
          <label htmlFor="name" className='text-[20px]'>UserName</label>
          <input type="text" id="name" className='w-[90%] h-[40px] border-[2px] border-[#555656 rounded-lg text-[18px] px-[20px]' required onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] '>
          <label htmlFor="email" className='text-[20px]'>Email</label>
          <input type="text" id="email" className='w-[90%] h-[40px] border-[2px] border-[#555656 rounded-lg text-[18px] px-[20px]' required onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] relative '>
          <label htmlFor="password" className='text-[20px]' >Password</label>
          <input type={show ? "text" : "password"} id="password" className='w-[90%] h-[40px] border-[2px] border-[#555656 rounded-lg text-[18px] px-[20px] ' required onChange={(e) => setPassword(e.target.value)} value={password} />
          {!show && <IoMdEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={() => setShow(prev => !prev)} />}
          {/* jab password dots me hota tab eye ka icon show hoga aur uspe click karne se password show hoga...ye cursor pointer isliye hai taki user ko pata chale ki ye clickable hai */}
          {show && <IoMdEyeOff className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px] cursor-pointer' onClick={() => setShow(prev => !prev)} />}
          {/* // jab password show hoga tab eye off ka icon show hoga aur uspe click karne se password wapas dots me chala jayega */}
        </div>
        <button className='px-[50px] py-[10px] bg-[#df0c0c] text-[white] rounded-lg mt-[20px] text-[18px] md:px-[100px]'>
          Sign Up
        </button>
        <p className='text-[18px]' >Already have an account? <span className='text-[19px] text-[#ff385c] cursor-pointer' onClick={() => navigate("/login")} >Log in</span></p>
      </form>
    </div>
  )
}

export default SignUp