'use client'
import { useFormState } from 'react-dom'
import { authenticate } from './actions'
import { useFormStatus } from 'react-dom'

const initialState = {
  message: ''
}

const Login = () => {
  const [state, formAction] = useFormState(authenticate, initialState)
  const { pending } = useFormStatus()

  if (state.code === "LOGIN_SUCCESS") {
    window.location.href = "/profile"
  }

  if (pending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <form action={formAction}>
      {state.code === "LOGIN_ERROR" && (
        <div className={`mb-4 text-center px-4 py-2 rounded bg-red-100 text-red-700`}>
          {state.message}
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Username</label>
        <input
          name="username"
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
        <input
          name="password"
          type="password"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button disabled={pending} type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
  )
}

export default Login;