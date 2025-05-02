import React, { useState } from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {

    const [role,setRole] = useState("USER");

    const adminNavList = [
        {name:"Categories",link:"/categories"},
        {name:"Add Category",link:"/addCategory"},
        {name:"Quizzes",link:"/quizzes"},
        {name:"Add Quiz",link:"/addQuiz"},
        {name:"Profile",link:"/profile"}
    ];

    const userNavlist = [
        {name:"Tests",link:"/tests"},
        {name:"Result",link:"/results"},
        {name:"Profile",link:"/profile"}
    ]

  return (
    <div className='h-[65px] w-full flex justify-between px-20 bg-red-500'>
        <div className='flex items-center'>
            <div className='mr-2'>
                <img src="./logovirtuospark.svg" alt="logo_img" className='w-[32px] h-[32px]'/>
            </div>
            <div>
                <h2 className='text-[32px] font-semibold text-white'>Virtuospark<span className='text-red-500'>.</span></h2>
            </div>
        </div>
        <div className=''>
            <ul className='flex items-center h-[100%]'>
                <li className='px-6 text-[17px] py-2 mx-5 bg-blue-200'>
                   <NavLink to="/">Profile</NavLink>             
                </li>
                <li>
                   <NavLink to="/hjh">Profile</NavLink>             
                </li>
                <li>
                   <NavLink to="/yuyi">Profile</NavLink>             
                </li>
                <li>
                   <NavLink to="/nbnmb">Profile</NavLink>             
                </li>
                <li>
                   <NavLink to="/43ytyt">Profile</NavLink>             
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar