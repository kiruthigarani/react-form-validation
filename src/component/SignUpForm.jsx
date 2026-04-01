import React, {useState,useEffect} from 'react';

import RenderCount from '../utils/RenderCount';

  const GetRenderCount = RenderCount();
const SignUpForm = () => {
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        city:''
    });
    useEffect(()=>{
        console.log("formData:", formData)
    })

    const [errorMessage, setErrorMessage] = useState({name: '', email: '', password: '', city: ''});

    const changeHandler = (e)=>{
        const {name, value} = e.target;
       setFormData((prevData)=>({
        ...prevData,
        [name]: value
       }));
    }
    const validation = ()=>{
          const {name, email, password, city} = formData;
       let newerrmsg ={};
        if( name.length < 3 || name.trim() === ''){
            newerrmsg.name = 'Name must be at least 3 characters long';
            setErrorMessage(newerrmsg);
        }else if( email.trim() === '' || !/\S+@\S+\.\S+/.test(email)){
            newerrmsg.email = 'Please enter a valid email address';
            setErrorMessage(newerrmsg);
        }else if(  password.trim() === '' || password.length < 6){
            newerrmsg.password = 'Password must be at least 6 characters long';
            setErrorMessage(newerrmsg);
        }else if( city.trim() === ''){
             console.log("formData-city:", city)
            newerrmsg.city = 'Please select your city';
            setErrorMessage(newerrmsg);
        }else{
            setErrorMessage({
                name: '',
                email: '',
                password: '',
                city: ''
            });
          
        }
        return Object.keys(newerrmsg).length === 0;
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
       if( validation()){
          alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}\nCity: ${formData.city}`);
            console.log({   
                name: formData.name,
                email: formData.email,
                password: formData.password,
                city: formData.city
            });
       }

      
    }
    return (
        //make it center of the page
        <div className='flex items-center justify-center min-h-screen'>
        <div className='p-10 justify-center  text-center bg-gray-700 w-[25%] h-[20%]'>
            <h1 className='text-bold text-2xl mb-4' >Sign Up- Normal Form</h1>
        <form>
            <GetRenderCount/>
            <div className='mb-4'>
                <label htmlFor='name' className='' >Name</label>
                <input className='ml-2 border border-black-300' type='text' id='name' name='name' value={formData.name} onChange={changeHandler} placeholder='Enter your name'/>
                {
                console.log("errorMessage.name:",errorMessage.name)
                }
                 {
                errorMessage.name && <p className='text-red-500 mt-2'>{errorMessage.name}</p>}
            </div>
            <div className='mb-4'>
                <label htmlFor='email' className='' >Email</label>
                <input className='ml-2 border border-black-300' type='email' id='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Enter your email'/>
                {errorMessage.email && <p className='text-red-500 mt-2'>{errorMessage.email}</p>}
            </div>
            <div className='mb-4'>
                <label htmlFor='password' className='' >Password</label>
                <input className='ml-2 border border-black-300' type='password' id='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Enter your password'/>
                {errorMessage.password && <p className='text-red-500 mt-2'>{errorMessage.password}</p>}
            </div>
             <div className='mb-4 '>
                <label htmlFor='city' className='' >City</label>
                <select className='ml-2 bg-gray-700 border border-black-300
                ' id='city' name='city' value={formData.city} onChange={changeHandler}>
                    <option value=''>Select your city</option>
                    <option value='Madurai'>Madurai</option>
                    <option value='Trichy'>Trichy</option>
                    <option value='Chennai'>Chennai</option>
                </select>
                {errorMessage.city && <p className='text-red-500 mt-2'>{errorMessage.city}</p>}
            </div>



             <div className=''>
              
                <button className='bg-amber-500 text-white py-2 px-4 rounded' onClick={handleSubmit} type='submit'>Sign Up</button>
            </div>
        </form>
        </div>
      
        </div>
        
    );
}
export default SignUpForm;