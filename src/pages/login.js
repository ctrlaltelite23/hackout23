import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Login(){

    

    return(
        <div className={`${inter.className} flex flex-wrap`}>
  <div className="flex w-full flex-col md:w-1/2">

    <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
      <p className="text-left text-4xl font-bold">Login to your account</p>
      <p className="mt-2 text-left text-gray-500">
        Enter account details below.
      </p>

      <form className="space-y-6 mt-10">

            
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-700 hover:text-indigo-600">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
      <div className="py-12 text-center">
        <p className="whitespace-nowrap text-gray-600">
          Don't have an account?
          <a
            href="/signup"
            className="underline-offset-4 ml-1 font-semibold text-gray-900 underline"
          >
            Create new account.
          </a>
        </p>
      </div>
    </div>
  </div>
  <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">

    <img
      className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
      src="https://salient.tailwindui.com/_next/static/media/background-auth.4bcf3f4b.jpg"
    />
  </div>
</div>

    )
}