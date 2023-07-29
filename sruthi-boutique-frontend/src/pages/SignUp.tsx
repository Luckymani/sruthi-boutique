import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/wave-haikei.svg";
import bg2 from "../assets/wave-haikei2.svg";
import { toast } from "react-toastify";

/**
 * Sign-up component for user registration.
 *
 * This component provides a sign-up form that allows users to enter their
 * name, email, password, and confirm password for registration. Upon successful
 * sign-up, a toast notification is displayed, and the form is reset.
 *
 * @returns {JSX.Element} The JSX element representing the sign-up component.
 */
const SignUp = () => {
  // State variables to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /**
   * Resets the form fields to their default values.
   */
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  /**
   * Handles the form submission for sign-up.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const SignUpHandler = (e) => {
    e.preventDefault();
    // Log the form input values
    console.log(name, email, password);
    // Check if the password matches the confirm password
    if (password !== confirmPassword) {
      // Show an error toast notification if passwords don't match
      toast.error("Password didn't match, please try again");
    } else {
      // Show a success toast notification if sign-up is successful
      toast.success("Sign Up completed");
    }
    // Reset the form fields
    resetForm();
  };

  return (
    <div className="relative sm:bg-none overflow-hidden  h-full">
      {/* Background images */}
      <img
        src={bg}
        className="absolute -z-20 top-0 left-0 opacity-100 md:hidden  md:opacity-75"
      />
      <img
        src={bg2}
        className="absolute -z-10 top-0 left-0 hidden md:inline-block opacity-95"
      />
      <div className=" pt-6 pb-16 sm:pb-24 h-full">
        {/* Navigation */}
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link to="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://i.ibb.co/F7bvD64/Logo-1.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          {/* Sign-in link */}
          <div className="flex">
            <Link
              to="/signIn"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >
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
                    <p className="text-2xl font-bold text-gray-700">
                      Log Into Your Account
                    </p>
                  </div>

                  <div className="mt-6">
                    <form onSubmit={SignUpHandler} className="space-y-6">
                      {/* Name input */}
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Full name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          placeholder="Full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm"
                        />
                      </div>
                      {/* Email input */}
                      <div>
                        <label htmlFor="mobile-or-email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="text"
                          name="mobile-or-email"
                          id="mobile-or-email"
                          autoComplete="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm"
                        />
                      </div>
                      {/* Password input */}
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm"
                        />
                      </div>
                      {/* Confirm Password input */}
                      <div>
                        <label htmlFor="confirmPassword" className="sr-only">
                          Confirm Password
                        </label>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
                          autoComplete="current-password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-color focus:ring-primary-color sm:text-sm"
                        />
                      </div>

                      {/* Submit button */}
                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md border border-transparent bg-primary-color-shade2 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-color focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-offset-2"
                        >
                          Create your account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Footer */}
                <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
                  <p className="text-xs leading-5 text-gray-500">
                    By Signing up, you agree to our{" "}
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline"
                    >
                      Terms
                    </a>
                    ,{" "}
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline"
                    >
                      Data Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium text-gray-900 hover:underline"
                    >
                      Cookies Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            {/* Bottom footer */}
            <div className="absolute text-sm w-full md:hidden text-center bottom-0 font-bold text-white">
              Stuthi Boutique All Right Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
