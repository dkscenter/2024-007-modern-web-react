
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Login from "./login";

export default async function LoginPage() {

  return (

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 flex items-center">
        <Link href={"/"}>
          Home
        </Link>
        <ChevronRightIcon className="h-5 w-5 ml-2" />
        Login
      </h1>
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6">Login</h1>
          <Login />
        </div>
      </div>
    </div>
  );
}