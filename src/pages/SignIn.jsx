import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useGoogleLogin } from '@react-oauth/google';

const SignIn = () => {
    const navigate = useNavigate();

    // Google Login handler
    // const loginWithGoogle = useGoogleLogin({
    //     flow: 'implicit',
    //     onSuccess: (tokenResponse) => {
    //         const token = tokenResponse.credential;
    //         const user = jwt_decode(token);
    //         console.log("Google User Info:", user);
    //         navigate('/home');
    //     },
    //     onError: (error) => {
    //         console.error("Google Sign-In Failed", error);
    //     }
    // });

    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-screen font-marathi">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 h-64 lg:h-full bg-green-300">
                <img
                    src="./137172-fcsygzyjaw-1582609369 (1).png"
                    className="h-full w-full object-cover"
                    alt="Sign In Visual"
                />
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex flex-col">
                <p className="mb-4 text-lg lg:text-xl text-end py-6 px-6 lg:py-8 lg:px-10 text-gray-500">
                    Don't Have an Account?
                    <span
                        className="text-black cursor-pointer"
                        onClick={() => navigate('/signup')}
                    >
                        {' '}Sign Up
                    </span>
                </p>

                <div className="px-6 lg:px-12 space-y-8">
                    <h2 className="text-3xl lg:text-4xl text-center lg:text-left">Sign In</h2>

                    {/* Custom Google Button */}
                    <button
                        // className="flex items-center justify-center gap-4 text-black py-3 px-4 rounded-full w-full border-2 border-red-400"
                        // onClick={loginWithGoogle}
                    >
                        <img src="./Group (2).png" alt="Google Icon" className="w-6 h-6" />
                        <span className="text-gray-500 text-lg lg:text-xl">Continue With Google</span>
                    </button>

                    <div className="flex items-center gap-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="text-lg lg:text-xl">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* OTP Form */}
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-y-2">
                            <label className="text-gray-400">Mobile No</label>
                            <input
                                type="text"
                                className="p-2 rounded-xl border-2"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-gray-400">OTP</label>
                            <input
                                type="text"
                                className="p-2 rounded-xl border-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-950 py-2 px-12 sm:px-16 rounded-md text-white self-start text-md"
                            onClick={() => navigate("/home")}
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
