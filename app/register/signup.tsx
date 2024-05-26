'use client'

import { useFormState } from 'react-dom'
import { register } from '@/app/register/actions'
import { useFormStatus } from 'react-dom'

const initialState = {
  message: '',
}

export default function Signup() {
  const [state, formAction] = useFormState(register, initialState)
  const { pending } = useFormStatus()

  return (
    <form action={formAction} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {state.message && (
        <div
          className={`mb-4 text-center px-4 py-2 rounded ${state.code === 'REGISTERED_USER' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
        >
          {state.message}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="firstname" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
        <input type="text" id="firstname" name="firstname" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="lastname" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
        <input type="text" id="lastname" name="lastname" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <button type="submit" disabled={pending} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Register
      </button>
    </form>
  )
}