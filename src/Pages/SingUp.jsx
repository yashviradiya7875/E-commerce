import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SingUp() {

  const [fullName, SetFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [user, setUser] = useState([])




  const SubmitUserData = () => {
    e.preventDefault()
    const userDetails = { fullName, email, password, confirmPassword }
    setUser(userDetails)

  }




  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col ">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
        <div className=" text-black w-full relative flexflex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
          <h1 className="text-center mb-4 text-3xl font-bold text-gray-700">Sign up</h1>
          <input
            onChange={e => SetFullName(e.target.value)}
            value={fullName}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name" />

          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email" />

          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password" />

          <input
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password" />

          <button
            type="submit"
            onClick={SubmitUserData}
            className="w-full text-center py-3 rounded text-white hover:bg-blue-500 bg-blue-600 my-1">Create Account</button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <Link className="no-underline border-b border-grey-dark text-grey-dark" to="#">
              Terms of Service
            </Link> and
            <Link className="no-underline border-b border-grey-dark text-grey-dark" to="#">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link className="no-underline font-bold border-b border-blue text-blue" to="/login">
            Log in
          </Link>.
        </div>
      </div>
    </div>
  )
}

export default SingUp