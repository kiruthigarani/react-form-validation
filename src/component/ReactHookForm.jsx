import React from 'react'
import { useForm } from 'react-hook-form'

function ReactHookForm() {

   const  {register } = useForm();

   const empname =  register('empname');
   const email =  register('email');
   const password =  register('password');
  
   
  return (
    <div className='flex items-center justify-center min-h-screen pl-4'>
           <div className='p-10 justify-center  text-center bg-gray-700 w-[100%] h-[100%]'>
               <h1 className='text-bold text-2xl mb-4'>Sign Up - ReactHook Form</h1>
           <form>
               <div className='mb-4'>
                   <label htmlFor='name' className='' >Name</label>
                   <input className='ml-2 border border-black-300' type='text' name={empname.name}  placeholder='Enter your name'/>
                  
               </div>
               <div className='mb-4'>
                   <label htmlFor='email' className='' >Email</label>
                   <input className='ml-2 border border-black-300' type='email' name={email.name}  placeholder='Enter your email'/>
                  
               </div>
               <div className='mb-4'>
                   <label htmlFor='password' className='' >Password</label>
                   <input className='ml-2 border border-black-300' type='password' name={password.name}  placeholder='Enter your password'/>
                 
               </div>
                <div className=''>
                 
                   <button className='bg-amber-500 text-white py-2 px-4 rounded' type='submit'>Sign Up</button>
               </div>
           </form>
           </div>
           
           </div>
  
  )
}

export default ReactHookForm
