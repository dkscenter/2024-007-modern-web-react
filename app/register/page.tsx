import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Signup from '@/app/register/signup'


export default function Register() {
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 flex items-center">
        <Link href={"/"}>
          Home
        </Link>
        <ChevronRightIcon className="h-5 w-5 ml-2" />
        Register
      </h1>
      <Signup/>
    </div>
  )
}
