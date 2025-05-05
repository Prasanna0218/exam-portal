import React from 'react'
import Button from "../commonComponents/Button"

const AddCategory = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        {/* Add category Heading */}
        <div className='flex flex-col justify-center items-center mb-2'>
            <p className='text-[34px] font-semibold mb-3'>Add categories</p>
            <p>Create a New Category of Quizzes with Description</p>
        </div>
        {/* Contents adding form */}
        <div className='flex py-10 auto'>
          <form action="">
            <div className='flex flex-col mb-8'>
              <label htmlFor="Title" className='text-[17px] mb-2 ms-2'>Title :</label>
              <input type="text" className='py-2 px-12 w-[550px] text-[17px] border border-gray-400 rounded-md' placeholder='Enter Category title'/>
            </div>
            <div className='flex flex-col mb-10'>
              <label htmlFor="description" className='text-[17px] mb-2 ms-2'>Description :</label>
              <textarea type="textArea" rows={5} name="description" className='py-2 px-12 w-[550px] text-[17px] border border-gray-400 rounded-md' id="decsription" placeholder='Enter Category description' />
            </div>
            <div className='text-center'>
              <Button value={"Add"} width={"200px"} bgColor={"bg-primary"} color={"white"}/>
            </div>
          </form>
        </div>
    </div>
  )
}

export default AddCategory

// import React from 'react'
// import Button from "../commonComponents/Button"

// const AddCategory = () => {
//   return (
//     <div className='min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4'>
//       {/* Stylish Heading with Underline */}
//       <div className='mb-6 relative inline-block'>
//         <p className='text-4xl font-bold text-gray-800'>Add Categories</p>
//         <span className='absolute left-0 bottom-0 h-1 w-full bg-primary rounded-md animate-pulse'></span>
//         <p className='text-gray-500 text-md mt-1 text-center'>Create a new category with a title and description</p>
//       </div>

//       {/* Form Section */}
//       <div className='bg-white shadow-xl rounded-lg p-8 w-full max-w-xl'>
//         <form>
//           {/* Title Input */}
//           <div className='flex flex-col mb-6'>
//             <label htmlFor="Title" className='text-[17px] font-medium text-gray-700 mb-2'>Title:</label>
//             <input 
//               type="text" 
//               id="Title"
//               className='py-3 px-4 text-[16px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300' 
//               placeholder='Enter category title' 
//             />
//           </div>

//           {/* Description Textarea */}
//           <div className='flex flex-col mb-8'>
//             <label htmlFor="description" className='text-[17px] font-medium text-gray-700 mb-2'>Description:</label>
//             <textarea 
//               rows={5} 
//               name="description" 
//               id="description" 
//               className='py-3 px-4 text-[16px] border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300' 
//               placeholder='Enter category description' 
//             />
//           </div>

//           {/* Submit Button */}
//           <div className='text-center'>
//             <Button 
//               value="Add" 
//               width="200px" 
//               bgColor="bg-primary hover:bg-primary-dark" 
//               color="white" 
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default AddCategory
