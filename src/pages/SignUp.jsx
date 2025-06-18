import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';


const SignUp = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen font-marathi">
            {/* Left Side */}
            <div className="bg-green-300 flex-1">
                <img
                    src="./137172-fcsygzyjaw-1582609369 (1).png"
                    className="h-full w-full object-cover"
                    alt="Sign In Visual"
                />
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col ">
                <p className="mb-4 text-xl text-end py-8 px-10 text-gray-500">Already Have An Account ? <span className="text-black cursor-pointer">Sign Up</span></p>
                <div className='px-12 space-y-6'>
                    <h2 className="text-4xl">Sign Up</h2>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-y-2">
                            <label className='text-gray-400'>Name</label>
                            <input type="text" className="p-2 rounded-xl border-2" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className='text-gray-400'>Contact No</label>
                            <input type="text" className="p-2 rounded-xl border-2" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className='text-gray-400'>Email</label>
                            <input type="text" className="p-2 rounded-xl border-2" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className='text-gray-400'>Address</label>
                            <input type="text" className="p-2 rounded-xl border-2" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className='text-gray-400'>OTP</label>
                            <input type="text" className="p-2 rounded-xl border-2" />
                        </div>
                        <button type="submit" className="bg-blue-950 py-2 px-16 rounded-md text-white self-start text-md" onClick={() => navigate("/home")}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
