import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { validateUsername, validateEmail, validatePassword } from "../../supporting functions/Validation.js";
import axios from "axios";
import bg from "../../assets/wave-haikei2.svg";
import bg2 from "../../assets/wave-haikei2.svg";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import useLoginWithGoogle from "../../supporting functions/useLoginWithGoogle.js";

function RegistrationPage() {
	const [registrationDeatils, setRegistrationDeatils] = useState({ username: "", email: "", password: "", confirmPassword: "" });
	const [validation, setValidation] = useState({ usernameVal: false, emailVal: false, passwordVal: false, confirmPasswordVal: false });
	const navigate = useNavigate();

	const { profileData, onSuccess, onError } = useLoginWithGoogle();
	const login = useGoogleLogin({ onSuccess, onError });

	//!----------------------------------------function that need to be called onchange of every inptu feild-----------------------------
	function handleChange(e) {
		setRegistrationDeatils({ ...registrationDeatils, [e.target.name]: e.target.value });

		switch (e.target.name) {
			case "username":
				return setValidation({ ...validation, usernameVal: validateUsername(e.target.value) });
			case "email":
				return setValidation({ ...validation, emailVal: validateEmail(e.target.value) });
			case "password":
				return setValidation({ ...validation, passwordVal: validatePassword(e.target.value) });
			case "confirmPassword":
				return setValidation({ ...validation, confirmPasswordVal: e.target.value == registrationDeatils.password });
			default:
				return null;
		}
	}

	//!-----------------------------------------------function that need to be exicuted on submit------------------------------
	async function registrationHandler(event) {
		event.preventDefault();

		try {
			if (validation.emailVal && validation.usernameVal && validation.passwordVal && validation.confirmPasswordVal) {
				await axios
					.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, registrationDeatils)
					.then((res) => {
						if (res.status === 203) {
							navigate("/login");
						}
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				window.alert(" fill the deatils");
			}
		} catch (error) {
			console.error(error);
		}
	}

	//!============== I have already completed the form handling part you just handle the ui of the website============
	//! =================make it responsive and and connect it to the above formhandling code========================

	console.log(registrationDeatils);
	console.log(validation);
	return (
		<div className="relative sm:bg-none overflow-hidden  h-full">
			{/* Background images */}
			<img src={bg} className="absolute -z-20 top-0 left-0 opacity-100 md:hidden  md:opacity-75" />
			<img src={bg2} className="absolute -z-10 top-0 left-0 hidden md:inline-block opacity-95" />
			<div className=" pt-6 pb-16 sm:pb-24 h-full">
				{/* Navigation */}
				<nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
					{/* Logo */}
					<div className="flex flex-1 items-center">
						<div className="flex w-full items-center justify-between md:w-auto">
							<Link to="/">
								<img className="h-8 w-auto sm:h-10" src="https://i.ibb.co/F7bvD64/Logo-1.png" alt="" />
							</Link>
						</div>
					</div>
					{/* Sign-in link */}
					<div className="flex">
						<Link to="/signIn" className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
							Sign in
						</Link>
					</div>
				</nav>
				<div className="flex flex-col items-center justify-center h-full">
					<div className="flex flex-row items-center justify-center">
						{/* Sign-up form */}
						<div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
							<div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
								<div className="px-4 py-8 sm:px-10">
									<div>
										<p className="text-2xl font-bold text-gray-700">create your account</p>
									</div>

									<div className="mt-6">
										<form onSubmit={registrationHandler} className="space-y-6">
											{/* Name input */}
											<div>
												<label htmlFor="username" className="sr-only">
													Full name
												</label>
												<input type="text" name="username" id="username" autoComplete="name" placeholder="User" value={registrationDeatils.name} onChange={(e) => handleChange(e)} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm" />
											</div>
											{/* Email input */}
											<div>
												<label htmlFor="email" className="sr-only">
													Email
												</label>
												<input type="text" name="email" id="email" autoComplete="email" placeholder="Email" value={registrationDeatils.email} onChange={(e) => handleChange(e)} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm" />
											</div>
											{/* Password input */}
											<div>
												<label htmlFor="password" className="sr-only">
													Password
												</label>
												<input id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" value={registrationDeatils.password} onChange={(e) => handleChange(e)} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm" />
											</div>
											{/* Confirm Password input */}
											<div>
												<label htmlFor="confirmPassword" className="sr-only">
													Confirm Password
												</label>
												<input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" autoComplete="current-password" value={registrationDeatils.confirmPassword} onChange={(e) => handleChange(e)} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm" />
											</div>

											{/* Submit button */}
											<div>
												<button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-primary-color-shade2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-offset-2">
													Create your account
												</button>
											</div>
										</form>
										<button onClick={() => login()}>sigin with google</button>
									</div>
								</div>
								{/* Footer */}
								<div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
									<p className="text-xs leading-5 text-gray-500">
										By Signing up, you agree to our <div className="font-medium text-gray-900 hover:underline">Terms</div>, <div className="font-medium text-gray-900 hover:underline">Data Policy</div> and <div className="font-medium text-gray-900 hover:underline">Cookies Policy</div>.
									</p>
								</div>
							</div>
						</div>
						{/* Bottom footer */}
						<div className="absolute text-sm w-full md:hidden text-center bottom-0 font-bold text-white">Stuthi Boutique All Right Reserved</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegistrationPage;
