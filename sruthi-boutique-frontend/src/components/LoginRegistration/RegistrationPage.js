import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { validateUsername, validateEmail, validatePassword } from "../../supporting functions/Validation.js";
import axios from "axios";

// import { useGoogleLogin } from "@react-oauth/google";
import useLoginWithGoogle from "../../supporting functions/useLoginWithGoogle.js";

function RegistrationPage() {
	const [registrationDeatils, setRegistrationDeatils] = useState({ username: "", email: "", password: "" });
	const [validation, setValidation] = useState({ usernameVal: false, emailVal: false, passwordVal: false });
	const navigate = useNavigate();

	// const [user, setuser] = useState();
	// const { profileData, onSuccess, onError } = useLoginWithGoogle();
	// const login = useGoogleLogin({ onSuccess, onError });

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
			default:
				return null;
		}
	}

	//!-----------------------------------------------function that need to be exicuted on submit------------------------------
	async function registrationHandler(event) {
		event.preventDefault();

		try {
			if (validation.emailVal && validation.usernameVal && validation.passwordVal) {
				await axios
					.post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, registrationDeatils)
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

	return <div>RegistrationPage</div>;
}

export default RegistrationPage;
