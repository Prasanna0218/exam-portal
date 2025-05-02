import React from 'react'
import SignInImage from '../components/siginComponents/SignInImage'
import SignInForm from '../components/siginComponents/SignInForm'

const SignInPage = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
        <div className='flex w-[70%] rounded-2xl h-[80%] box-shadow1'>
            <SignInImage/>
            <SignInForm/>
        </div>
    </div>
  )
}

export default SignInPage