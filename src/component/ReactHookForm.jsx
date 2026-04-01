import React from 'react'
import { useForm } from 'react-hook-form'
import RenderCount from '../utils/RenderCount';

const GetRenderCount = RenderCount();

function ReactHookForm() {

   const  {register, handleSubmit } = useForm({
    defaultValues:{
        orderno: new Date().getTime(),
        empname:'',
        email:'',
        password:''
    }
   });
 
   const submit = (data)=>{
    console.log("data:", data)
   }
   
  return (
    <div className='flex items-center justify-center min-h-screen pl-4'>
           <div className='p-10 justify-center  text-center bg-gray-700 w-[35%] h-[35%]'>
               <h1 className='text-bold text-2xl mb-4'>Sign Up - ReactHook Form</h1>
           <form autoComplete='off' onSubmit={handleSubmit(submit)}>
             <GetRenderCount/>
             <div className='row mb-3'>
                <div className="col">
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="orderno" {...register('orderno')} />
                        <label htmlFor="empname">OrderNo</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="email" {...register('email')} />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
              </div>
              <div className="row">
                 <div className="col">
                    <div className="form-floating">
                        <input type="name" className="form-control" placeholder="name" {...register('empname')} />
                        <label htmlFor="empname">Name</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="password" {...register('password')} />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
              </div>
            
                <div className='mt-3'>
                 <button className='bg-amber-500 text-white py-2 px-4 rounded' type='submit'>Sign Up</button>
               </div>
           </form>
           </div>
           
           </div>
  
  )
}

export default ReactHookForm
