import React from "react";
import { Link } from "react-router-dom";
const Account = () => {
    const [emailRegisterSwitch, setEmailRegisterSwitch] = React.useState(false);
    const [alreadyHasAccount, setAlreadyHasAccount] = React.useState(true);
    console.log(emailRegisterSwitch);

    return (
        <section className="flex justify-center w-full h-screen">
            <div className="w-[500px] h-[500px] rounded-lg border border-gray-200 self-center flex justify-around flex-col shadow-2xl ">
                <div className="self-center ">
                    <h2 className="text-2xl">Join RecipeKings</h2>
                </div>
                {alreadyHasAccount && (
                    <>
                        {!emailRegisterSwitch ? (
                            <>
                                <div className="flex gap-5 flex-col w-full">
                                    <div className="w-[220px] self-center border rounded-3xl border-yellow-500 flex gap-3 p-2">
                                        <svg
                                            className="w-[20%]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 48 48"
                                            width="24px"
                                            height="24px">
                                            <path
                                                fill="#FFC107"
                                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                            />
                                            <path
                                                fill="#FF3D00"
                                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                            />
                                            <path
                                                fill="#4CAF50"
                                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                            />
                                            <path
                                                fill="#1976D2"
                                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                            />
                                        </svg>
                                        <p>Sign up with Google</p>
                                    </div>
                                    <div className="w-[220px] self-center border rounded-3xl border-yellow-500 flex gap-3 p-2 ">
                                        <svg
                                            className="w-[20%]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 48 48"
                                            width="24px"
                                            height="24px">
                                            <path
                                                fill="#3F51B5"
                                                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                                            />
                                            <path
                                                fill="#FFF"
                                                d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                                            />
                                        </svg>
                                        <p>Sign up with Facebook</p>
                                    </div>
                                    <div
                                        className="w-[220px] self-center  border rounded-3xl border-yellow-500 flex gap-3 p-2 cursor-pointer"
                                        onClick={() =>
                                            setEmailRegisterSwitch(
                                                (prev) => !prev
                                            )
                                        }>
                                        <svg
                                            className="w-[20%]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 48 48"
                                            width="24px"
                                            height="24px">
                                            <path
                                                fill="#e0e0e0"
                                                d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
                                            />
                                            <path
                                                fill="#d9d9d9"
                                                d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
                                            />
                                            <path
                                                fill="#eee"
                                                d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
                                            />
                                            <path
                                                fill="#e0e0e0"
                                                d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
                                            />
                                            <path
                                                fill="#ca3737"
                                                d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
                                            />
                                            <path
                                                fill="#f5f5f5"
                                                d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
                                            />
                                            <path
                                                fill="#e84f4b"
                                                d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
                                            />
                                        </svg>
                                        <p>Sign up with Gmail</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p>
                                        Already have an account?{" "}
                                        <Link
                                            to="#"
                                            className="text-yellow-500"
                                            onClick={() =>
                                                setAlreadyHasAccount(
                                                    (prev) => !prev
                                                )
                                            }>
                                            Sign In
                                        </Link>
                                    </p>
                                </div>{" "}
                            </>
                        ) : (
                            <div className="flex justify-center flex-col content-center mx-16 gap-2">
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="user">Username</label>
                                    <input
                                        className="border focus:outline-none focus:border-yellow-500 p-2"
                                        type="text"
                                        name="Uuer"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className="border focus:outline-none focus:border-yellow-500 p-2"
                                        type="text"
                                        name="email"
                                        placeholder="example@gmail.com"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="pass">Password</label>
                                    <input
                                        className="border focus:outline-none focus:border-yellow-500 p-2"
                                        type="password"
                                        name="pass"
                                        placeholder="**********"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="pass_check">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="border focus:outline-none focus:border-yellow-500 p-2"
                                        type="password"
                                        name="pass_check"
                                        placeholder="**********"
                                    />
                                </div>

                                <div className=" text-center">
                                    <Link
                                        className="mt-2 block border rounded-lg py-2  px-4 bg-yellow-500"
                                        to="/recipes">
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        )}
                    </>
                )}
                {!alreadyHasAccount && (
                    <>
                        <div className="flex justify-center flex-col content-center mx-16 gap-2">
                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="border focus:outline-none focus:border-yellow-500 p-2"
                                    type="text"
                                    name="email"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <label htmlFor="pass">Password</label>
                                <input
                                    className="border focus:outline-none focus:border-yellow-500 p-2"
                                    type="password"
                                    name="pass"
                                    placeholder="**********"
                                />
                            </div>
                            <div className="text-center">
                                <Link
                                    className="mt-2 block border rounded-lg py-2 px-4 bg-yellow-500"
                                    to="/recipes">
                                    Sign In
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col mx-16 justify-center content-center">
                            <div className="flex gap-2">
                                <span className="h-[2px] w-full bg-yellow-500 self-center"></span>
                                <span>OR</span>
                                <span className="h-[2px] w-full bg-yellow-500 self-center"></span>
                            </div>
                            <div className="w-[225px] self-center border rounded-3xl border-yellow-500 flex gap-2 p-2">
                                <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="48px"
                                    height="24px">
                                    <path
                                        fill="#FFC107"
                                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                    />
                                    <path
                                        fill="#FF3D00"
                                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                    />
                                    <path
                                        fill="#4CAF50"
                                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                    />
                                    <path
                                        fill="#1976D2"
                                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                    />
                                </svg>
                                <p>Continue with Google</p>
                            </div>
                            <div className="w-[225px] self-center border rounded-3xl border-yellow-500 flex gap-2 p-2 ">
                                <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width="48px"
                                    height="24px">
                                    <path
                                        fill="#3F51B5"
                                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                                    />
                                    <path
                                        fill="#FFF"
                                        d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                                    />
                                </svg>
                                <p>Continue with Facebook</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <p>
                                Dont have an account Yet?{" "}
                                <Link
                                    to="#"
                                    onClick={() =>
                                        setAlreadyHasAccount((prev) => !prev)
                                    }>
                                    <b>Create One</b>
                                </Link>
                            </p>
                        </div>
                    </>
                )}
                {emailRegisterSwitch && (
                    <div className="text-center text-sm mx-10">
                        Click "Sign Up" to agree with RecipeKings{" "}
                        <u>Terms of service</u> and acknowledge that RecipeKings{" "}
                        <u>Privacy Policy</u> applies to you
                    </div>
                )}
            </div>
        </section>
    );
};

export default Account;
