import React, { useState, useContext } from "react";
import axios from "axios";

// import useLoginWithGoogle from "../../supporting functions/useLoginWithGoogle";
// import { useGoogleLogin } from "@react-oauth/google";

import React from "react";

function LoginPage() {
	const [loginDeatils, setLoginDeatils] = useState({ email: "", password: "" });

	// const login = useGoogleLogin({ onSuccess, onError });

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
			await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, loginDeatils);
		} catch (error) {
			console.log(error);
		}
	}

	return <div>LoginPage</div>;
}

export default LoginPage;
