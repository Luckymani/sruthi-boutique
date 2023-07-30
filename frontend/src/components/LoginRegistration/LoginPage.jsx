import React, { useState, useContext } from "react";
import axios from "axios";
import bg from "../../assets/wave-haikei2.svg";
import { Link } from "react-router-dom";
import useLoginWithGoogle from "../../supporting functions/useLoginWithGoogle";
import { useGoogleLogin } from "@react-oauth/google";

function LoginPage() {
	const [loginDeatils, setLoginDeatils] = useState({ email: "", password: "" });

	const { profileData, onSuccess, onError } = useLoginWithGoogle();
	const login = useGoogleLogin({ onSuccess, onError });

	//!----------------------------------------function that need be exicuted onchnge of input---------------------------
	function handleChange(e) {
		setLoginDeatils({ ...loginDeatils, [e.target.name]: e.target.value });
	}

	//!----------------------------------function that need be exicutd don form submit--------------------------------
	async function loginHandler(e) {
		e.preventDefault();

		const { email, password } = loginDeatils;

		if (email == "" && password == "") {
			window.alert("enter the credentials");
			return;
		}

		try {
			await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, loginDeatils);
		} catch (error) {
			console.log(error);
		}
	}

	console.log(loginDeatils);
	return (
		<div className="relative overflow-hidden bg-gray-800 bg-opacity-100  md:bg-opacity-10 h-full">
			{/* Background image */}
			<img src={bg} className="absolute -z-10 top-0 left-0 hidden md:inline-block opacity-95" />
			{/* Navigation */}
			<div className="relative pt-6 pb-16 sm:pb-24  h-full ">
				<nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
					{/* Logo */}
					<div className="flex flex-1 items-center">
						<div className="flex w-full items-center justify-between md:w-auto">
							<Link to="/">
								<img className="h-8 w-auto sm:h-10" src="https://i.ibb.co/F7bvD64/Logo-1.png" alt="" />
							</Link>
						</div>
					</div>
					{/* Sign-up link */}
					<div className="flex">
						<Link to="/signUp" className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
							Log in
						</Link>
					</div>
				</nav>

				<main className="mt-16 sm:mt-24">
					<div className="mx-auto max-w-7xl">
						<div className="lg:grid lg:grid-cols-12 lg:gap-8">
							{/* Introduction */}
							<div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
								<div>
									{/* Call to action */}
									<a href="#" className="hidden md:inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
										<span className="rounded-full bg-primary-color px-3 py-0.5 text-sm font-semibold leading-5 text-white ">Stitch with us!</span>
										<span className="ml-4 text-sm">In the world of online e-commerce</span>
									</a>
									{/* Main heading */}
									<h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Your One-Stop E-Commerce Stitching Destination</h1>
									{/* Description */}
									<p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Join our vibrant stitching community and share your passion with like-minded individuals. Connect with experienced artisans, exchange ideas, and showcase your masterpieces on our interactive forums.</p>
								</div>
							</div>
							{/* Sign-in form */}
							<div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
								<div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
									<div className="px-4 py-8 sm:px-10">
										<div>
											<p className="text-xl font-bold text-gray-700">Sign In</p>
										</div>

										<div className="mt-6">
											<form onSubmit={loginHandler} className="space-y-6">
												<div>
													<label htmlFor="email" className="sr-only">
														Email
													</label>
													<input type="text" name="email" id="email" autoComplete="email" placeholder="Email" value={loginDeatils.email} onChange={(e) => handleChange(e)} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm" />
												</div>
												{/* Password input */}
												<div>
													<label htmlFor="password" className="sr-only">
														Password
													</label>
													<input id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" value={loginDeatils.password} onChange={(e) => handleChange(e)} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm" />
												</div>
												{/* Submit button */}
												<div>
													<button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-primary-color-shade2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-offset-2">
														Login
													</button>
												</div>
											</form>
											<button onClick={() => login()}>sigin with google</button>
										</div>
									</div>
									{/* Footer */}
									<div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
										<p className="text-xs leading-5 text-gray-500">
											By signing up, you agree to our{" "}
											<a href="#" className="font-medium text-gray-900 hover:underline">
												Terms
											</a>
											,{" "}
											<a href="#" className="font-medium text-gray-900 hover:underline">
												Data Policy
											</a>{" "}
											and{" "}
											<a href="#" className="font-medium text-gray-900 hover:underline">
												Cookies Policy
											</a>
											.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default LoginPage;
