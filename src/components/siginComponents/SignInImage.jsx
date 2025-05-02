import React from 'react'

const SignInImage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[50%] h-[100%] relative'>
        <div className="absolute right-0 top-1/2 translate-y-[-50%] h-[500px] w-[2px] bg-gray-200"></div>
        <div>
          <p className='text-[40px] font-semibold text-gray-700'>Sign In <span>!</span></p>
        </div>
        <div>
          <img src="./signinvirtuospark.svg" alt="signIn-img" className='h-[350px] w-[430px]'/>
        </div>
    </div>
  )
}

export default SignInImage