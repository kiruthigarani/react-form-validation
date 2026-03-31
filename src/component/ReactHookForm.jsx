import React from 'react'
import { useForm } from 'react-hook-form'
import RenderCount from '../utils/RenderCount';
function ReactHookForm() {

   const  {register, handleSubmit } = useForm({
    defaultValues:{
        empname:'John Doe',
        email:'john.doe@example.com',
        password:''
    }
   });
 
   const submit = (data)=>{
    console.log("data:", data)
   }
   
  return (
    <div className='flex items-center justify-center min-h-screen pl-4'>
           <div className='p-10 justify-center  text-center bg-gray-700 w-[100%] h-[100%]'>
               <h1 className='text-bold text-2xl mb-4'>Sign Up - ReactHook Form</h1>
           <form autoComplete='off' onSubmit={handleSubmit(submit)}>
               <RenderCount name="ReactHookForm" />
               <div className='mb-4'>
                   <label htmlFor='name' className='pr-3' >Name</label>
                   <input className='ml-2 border border-black-300' type='text' {...register('empname')}   placeholder='Enter your name'/>
                </div>
               <div className='mb-4'>
                   <label htmlFor='email' className='pr-3' >Email</label>
                   <input className='ml-2 border border-black-300' type='email' {...register('email')}  placeholder='Enter your email'/>
                  
               </div>
               <div className='mb-4'>
                   <label htmlFor='password' className='pr-3' >Password</label>
                   <input className='ml-2 border border-black-300' type='password' {...register('password')}  placeholder='Enter your password'/>
                 
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
