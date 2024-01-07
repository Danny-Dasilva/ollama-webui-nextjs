/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/PgUsLbSsy6v
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RegisterPage() {
    return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <FlagIcon className="mx-auto h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to Ollama Web UI</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <div className="mt-1">
                <Input id="name" name="name" placeholder="Enter Your Full Name" required type="text" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <div className="mt-1">
                <Input id="email" name="email" placeholder="Enter Your Email" required type="email" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <div className="mt-1">
                <Input id="password" name="password" placeholder="Enter Your Password" required type="password" />
              </div>
            </div>
            <div>
              <Button className="w-full" type="submit">
                Create Account
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                  <Link className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                    Sign In
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function FlagIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="black"
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" x2="4" y1="22" y2="15" />
      </svg>
    )
  }
  