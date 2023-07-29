export const validateUsername = (username) => {
	const regex = /^[a-zA-Z0-9_]{6,}$/;
	if (!regex.test(username)) {
		return false;
	}
	return true;
};

export const validateEmail = (email) => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regex.test(email)) {
		return false;
	}
	return true;
};

export const validatePassword = (password) => {
	const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	if (!regex.test(password)) {
		return false;
	}
	return true;
};
