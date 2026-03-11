import React, {useState} from 'react';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState({name: '', email: '', password: ''});

    const changeHandler = (e)=>{
        const {name, value} = e.target;
       setFormData((prevData)=>({
        ...prevData,
        [name]: value
       }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {name, email, password} = formData;

        if(name === 'name' && name.length < 3 || name.trim() === ''){
            setErrorMessage((prevError)=>({
                ...prevError,
                name: 'Name must be at least 3 characters long'
            }));
        }else if(email === 'email' && email.trim() === '' || !/\S+@\S+\.\S+/.test(email)){
            setErrorMessage((prevError)=>({
                ...prevError,
                email: 'Please enter a valid email address'
            }));
        }else if(password === 'password' &&  password.trim() === '' || password.length < 6){
            setErrorMessage((prevError)=>({
                ...prevError,
                password: 'Password must be at least 6 characters long'
            }));
        }else{
            setErrorMessage({
                name: '',
                email: '',
                password: ''
            });
            alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
            console.log({   
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
        }

      
    }
    return (
        //make it center of the page
        <div className='flex items-center justify-center min-h-screen'>
        <div className='p-10 justify-center  text-center bg-gray-700 w-[25%] h-[20%]'>
            <h1 className='text-bold text-2xl mb-4' >Sign Up Form</h1>
        <form>
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


             <div className=''>
              
                <button className='bg-amber-500 text-white py-2 px-4 rounded' onClick={handleSubmit} type='submit'>Sign Up</button>
            </div>
        </form>
        </div>
        </div>
    );
}
export default SignUpForm;