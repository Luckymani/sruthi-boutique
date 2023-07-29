import { useState } from "react";
import axios from "axios";

function useLoginWithGoogle() {
	const [profileData, setProfileData] = useState();

	const onSuccess = async (tokenResponse) => {
		console.log(tokenResponse);
		const { access_token } = tokenResponse;
		const url = "https://www.googleapis.com/oauth2/v3/userinfo";
		let config = {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		};

		await axios
			.get(url, config)
			.then((response) => {
				console.log(response.data);
				setProfileData(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onError = (err) => {
		console.log(err);
	};

	return { profileData, onSuccess, onError };
}

export default useLoginWithGoogle;
