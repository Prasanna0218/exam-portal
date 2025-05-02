import React, { useState } from 'react'
import Button from '../commonComponents/Button'

const SignInForm = () => {

    const [userData,setUserData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e)=>{
        setUserData({...userData,[e.target.name]:e.target.value});
    }

    const handleSubmit = () =>{
        //api call
    }

  return (
    <div className='w-[50%] h-[100%] flex flex-col justify-center items-center'>
        <div className='mb-8 flex items-center mr-4'>
            <div className='mr-2'>
                <img src="./logovirtuospark.svg" alt="logo_img" className='w-[32px] h-[32px]'/>
            </div>
            <div>
                <h2 className='text-[32px] font-semibold'>Virtuospark<span className='text-red-500'>.</span></h2>
            </div>
        </div>
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-col mb-7'>
                    <label htmlFor="email" className='mb-2 text-lg'>Email : </label>
                    <input type="email"  placeholder='Enter your email here' name='email' id='email' className='px-5 py-2 w-[290px] outline-none rounded-md border border-gray-400' onChange={(e)=>handleChange(e)}/>
                </div>
                <div className='flex flex-col mb-1'>
                    <label htmlFor="password" className='mb-2 text-lg'>Password : </label>
                    <input type="password" name="password" id="password" placeholder='********' className='px-5 py-2 w-[290px] outline-none rounded-md border border-gray-400' onChange={(e)=>handleChange(e)}/>
                </div>
                <div className='mb-9 flex justify-end text-red-600 cursor-pointer mr-3'>
                    <span className='text-[14px] mt-1 '>Resend password !</span>
                </div>
                <div className='text-center'>
                    <Button value={"Submit"} width={"220px"} buttonType={"primary"}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignInForm

// import React from 'react';
// import Button from '../commonComponents/Button';

// const SignInForm = () => {
//   return (
//     <div className="w-[50%] h-[100%] flex flex-col justify-center items-center pb-16">
//       {/* Logo */}
//       <div className="mb-7 flex items-center mr-4">
//         <div className="mr-2">
//           <img
//             src="./logovirtuospark.svg"
//             alt="logo_img"
//             className="w-[32px] h-[32px]"
//           />
//         </div>
//         <div>
//           <h2 className="text-[32px] font-semibold">
//             Virtuospark<span className="text-red-500">.</span>
//           </h2>
//         </div>
//       </div>

//       {/* Form */}
//       <form>
//         {/* Email */}
//         <div className="flex flex-col mb-6">
//           <label htmlFor="email" className="mb-2 text-lg">
//             Email:
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email here"
//             name="email"
//             id="email"
//             className="px-5 py-2 w-[270px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Password */}
//         <div className="flex flex-col mb-10">
//           <label htmlFor="password" className="mb-2 text-lg">
//             Password:
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="********"
//             className="px-5 py-2 w-[270px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Submit Button */}
//         <div>
//           <Button value="Submit" width="270px" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignInForm;
