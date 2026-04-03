import React from 'react'
import { useForm } from 'react-hook-form'
import RenderCount from '../utils/RenderCount';

const GetRenderCount = RenderCount();

function ReactHookForm() {

   const  {register, handleSubmit, formState:{errors} } = useForm({
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
   
   const onError = (error)=>{
    console.log("error:", error)
   }
  return (
    <div className='flex items-center justify-center min-h-screen pl-4'>
           <div className='p-10 justify-center  text-center bg-gray-700 w-[35%] h-[35%]'>
               <h1 className='text-bold text-2xl mb-4'>Sign Up - ReactHook Form</h1>
           <form autoComplete='off' noValidate onSubmit={handleSubmit(submit, onError)}>
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
                        <input type="email" className="form-control" placeholder="email" {...register('email', {
                            mode: "onChange",
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            }
                        })} />
                        <label htmlFor="email">Email</label>
                        {errors.email && <div className="text-danger">{errors.email.message}</div>}
                    </div>
                </div>
              </div>
              <div className="row">
                 <div className="col">
                    <div className="form-floating">
                        <input type="name" className="form-control" placeholder="name" {...register('empname', {
                            mode: "onChange",
                            required: "Name is required",
                            minLength: {
                                value: 6,
                                message: "Name must be at least 6 characters"
                            }
                        })} />
                        <label htmlFor="empname">Name</label>
                         {errors.empname && <div className="text-danger">{errors.empname.message}</div>}
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="password" {...register('password', {
                            mode: "onChange",
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })} />
                        <label htmlFor="password">Password</label>
                            {errors.password && <div className="text-danger">{errors.password.message}</div>}
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
